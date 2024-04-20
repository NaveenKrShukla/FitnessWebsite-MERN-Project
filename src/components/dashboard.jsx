import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-lightcream">
            <Sidebar />
            <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
                <div className="mx-auto w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;