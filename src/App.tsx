import React from "react";
import "./App.css";
import Header from "./component/Header/Header";

import Footer from "./component/Footer/Footer";
import { Route, Routes,Router } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Discover from "./component/Discover/Discover";
import HomePage from "./component/HomePage/HomePage";
import StartProject from "./component/StartProject/StartProject";
import PostProject from "./component/NewProject/CreateProject/PostProject";
import Dashboard from "./component/Dashborad/Dashboard";
import SideBar from "./component/Dashborad/Sidbar/SideBar";
import Disbursment from "./component/Dashborad/Layer/Disbursment/Disbursment";
import Funding from "./component/Dashborad/Layer/Funding/Funding";
import Promotion from "./component/Dashborad/Layer/Promotion/Promotion";
import Roi from "./component/Dashborad/Layer/ROI/Roi";
import NoMatch from './component/NoMatch/NoMatch';
import PrivateCopmonent from './component/PrivatComponent/PrivateCopmonent';

function App() {
  return (
    <>
     
     
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/project" element={<StartProject />} />
        <Route path="/create-project" element={<PostProject />} />
        <Route element={<PrivateCopmonent/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/disbursment"  element={<Disbursment />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/roi" element={<Roi />} />
          </Route>
          {/* <Route index element={<Dashboard />} /> */}
          

        <Route path="*" element={<NoMatch />} />
       
        </Routes>
      

      
        {/* <Route path="/dashboard" component={Dashboard}/> 
        <Route path="/disbursment" element={<Disbursment />}/> 
        <Route path="/funding" element={<Funding />}/> 
        <Route path="/promotion" element={<Promotion />}/> 
        <Route path="/roi" element={<Roi />}/>  */}
       
       
           {/* <Route path="/dashboard" element={<Dashboard />}/>
          <Route index element={<Dashboard />} />
          <Route path="disbursment"  element={<Disbursment />} />
          <Route path="funding" element={<Funding />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="roi" element={<Roi />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        
     
        




      
    
    </>
  );
}

export default App;
