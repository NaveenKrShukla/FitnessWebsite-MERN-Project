import React, { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const AreaChart = ({ width, height, data, fill, stroke }) => {
    const axesRef = useRef(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Y axis
    const maxY = useMemo(() => {
        if (!Array.isArray(data) || data.length === 0) return 0;
        return d3.max(data, d => d.y) || 0;
    }, [data]);

    const yScale = useMemo(() => {
        return d3.scaleLinear()
            .domain([0, maxY])
            .range([boundsHeight, 0]);
    }, [maxY, boundsHeight]);

    // X axis
    const maxX = useMemo(() => {
        if (!Array.isArray(data) || data.length === 0) return 0;
        return d3.max(data, d => d.x) || 0;
    }, [data]);

    const xScale = useMemo(() => {
        return d3.scaleLinear()
            .domain([0, maxX])
            .range([0, boundsWidth]);
    }, [maxX, boundsWidth]);

    // Render the X and Y axis using d3.js, not react
    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll("*").remove();
        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
            .append("g")
            .attr("transform", "translate(0," + boundsHeight + ")")
            .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale);
        svgElement.append("g").call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight]);

    // Build the area path
    const areaPath = useMemo(() => {
        if (!Array.isArray(data) || data.length === 0) return "";
        const areaBuilder = d3.area()
            .x((d) => xScale(d.x))
            .y1((d) => yScale(d.y))
            .y0(yScale(0));
        return areaBuilder(data);
    }, [data, xScale, yScale]);

    // Build the line path
    const linePath = useMemo(() => {
        if (!Array.isArray(data) || data.length === 0) return "";
        const lineBuilder = d3.line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));
        return lineBuilder(data);
    }, [data, xScale, yScale]);

    if (!linePath || !areaPath) {
        return null;
    }

    return (
        <div className="w-full">
            <svg width={width} height={height}>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                >
                    <path
                        d={areaPath}
                        opacity={1}
                        stroke="none"
                        fill={fill}
                        fillOpacity={0.4}
                    />
                    <path
                        d={linePath}
                        opacity={1}
                        stroke={stroke}
                        fill="none"
                        strokeWidth={2}
                    />
                </g>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    ref={axesRef}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
                />
            </svg>
        </div>
    );
};

export default AreaChart;