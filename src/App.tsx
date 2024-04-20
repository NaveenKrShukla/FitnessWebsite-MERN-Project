import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import {  Routes,Route } from "react-router-dom";
import Dashboard from './components/dashboard'
import MyDashboard from './components/MyDashboard'
import Workout from './components/Workout'

function App() {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.Home
  // );
  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.Home);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="app bg-gray-20">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<Dashboard/>}> 
          <Route path="/dashboard/my-profile" element={<MyDashboard/>}/>
          <Route path="/dashboard/workout" element={<Workout/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
