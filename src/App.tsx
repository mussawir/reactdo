import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Discover from "./component/Discover/Discover";
import HomePage from "./component/HomePage/HomePage";
import StartProject from "./component/StartProject/StartProject";
import PostProject from "./component/NewProject/CreateProject/PostProject";
import Dashboard from "./component/Dashborad/Dashboard";

import Disbursment from "./component/Dashborad/Layer/Disbursment/Disbursment";
import Funding from "./component/Dashborad/Layer/Funding/Funding";
import Promotion from "./component/Dashborad/Layer/Promotion/Promotion";
import Roi from "./component/Dashborad/Layer/ROI/Roi";
import NoMatch from './component/NoMatch/NoMatch';
import PrivateCopmonent from './component/PrivatComponent/PrivateCopmonent';
import Categories from './component/Step1/Categories';
import Subcategory from './component/Step2/Subcategory';
import Location from './component/Step3/Location';
import MyProjects from "./component/DashboradDropDown/MyProjects/MyProjects";
import MyInvestment from "./component/DashboradDropDown/MyInvestment/MyInvestment";
import MyAcount from "./component/DashboradDropDown/MyAcount/MyAcount";


function App() {
  return (
    <>
     
     
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
       
        <Route path="/create-project" element={<PostProject />} />
        <Route path="/project" element={<StartProject />} />
        <Route path="/project/categories" element={<Categories />} />
        <Route path="/project/categories/subcategory" element={<Subcategory />} />
        <Route path="/project/categories/subcategory/location" element={<Location />} />

        
        <Route path="myprojects" element={<MyProjects />} />
        <Route  path="/myinvestment" element={<MyInvestment />} />
        <Route path="/myaccount" element={<MyAcount />} />
        <Route element={<PrivateCopmonent/>}>
        <Route path="dashboard" element={<Dashboard />}/>
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
