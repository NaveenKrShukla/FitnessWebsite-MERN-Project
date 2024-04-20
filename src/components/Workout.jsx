import React from 'react';
import { data } from "./data";
import AreaChart from "./AreaChart";

const Workout = () => {

    return (
        <div className='p-10 flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <div className='bg-white rounded-xl py-4 pl-4 w-full'>
                    <div className='text-2xl font-semibold'>
                        Running
                    </div>
                    <AreaChart data={data} width={980} height={400} fill={'#C6E8F0'} stroke={'#1EA7C5'} />
                </div>

                <div className='bg-white rounded-xl py-4 pl-4 w-full'>
                    <div className='text-2xl font-semibold'>
                        Cycling
                    </div>
                    <AreaChart data={data} width={980} height={400} fill={'#EAC0F0'} stroke={'#C046D3'} />
                </div>

                <div className='bg-white rounded-xl py-4 pl-4 w-full'>
                    <div className='text-2xl font-semibold'>
                        Yoga
                    </div>
                    <AreaChart data={data} width={980} height={400} fill={'#D2EDBA'} stroke={'#6CC51D'} />
                </div>
            </div>
        </div>
    );
};

export default Workout;
