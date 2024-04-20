import React from 'react';
import { useNavigate } from 'react-router-dom';
import { matchPath, useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    const navigate = useNavigate();

    return (
        <div className='max-w-[20vw] w-full min-h-[100vh] h-full py-4 bg-[#FBFBFB]'>
            <div className='w-full'>
                <div onClick={() => navigate('/dashboard/my-profile')} className={`${matchRoute('/dashboard/my-profile') && 'bg-[#05A77B] text-white'} text-2xl w-full font-medium cursor-pointer hover:bg-caribbeangreen-300 hover:text-black text-center py-4 transition-all duration-300`}>Dashboard</div>
                <div onClick={() => navigate('/dashboard/workout')} className={`${matchRoute('/dashboard/workout') && 'bg-[#05A77B] text-white'} text-2xl w-full font-medium cursor-pointer hover:bg-caribbeangreen-300 hover:text-black text-center py-4 transition-all duration-300`}>Workout Statistic</div>
            </div>
        </div>
    );
};

export default Sidebar;