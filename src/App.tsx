import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
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
import NoMatch from "./component/NoMatch/NoMatch";
import PrivateCopmonent from "./component/PrivatComponent/PrivateCopmonent";
import Categories from "./component/Step01/Categories";
import ProjectOverview from "./component/Step03/ProjectOverview";
import Location from "./component/Step02/Location";
import MyProjects from "./component/DashboradDropDown/MyProjects/MyProjects";
import MyInvestment from "./component/DashboradDropDown/MyInvestment/MyInvestment";
import MyAcount from "./component/DashboradDropDown/MyAcount/MyAcount";
import MyRedux from "./component/MyRedux/MyRedux";
import Page2 from "./component/MyRedux/Page2";
import CreateProjectTabs from "./component/CreateProjectTabs/CreateProjectTabs";
import Basic from "./component/CreateProjectTabs/Tabs/Basic/Basic";
import FundingTab from "./component/CreateProjectTabs/Tabs/FundingTab/FundingTab";
import Story from "./component/CreateProjectTabs/Tabs/Story/Story";
import MyTeam from "./component/CreateProjectTabs/Tabs/MyTeam/MyTeam";
import PaymentMethod from "./component/CreateProjectTabs/Tabs/PaymentMethod/PaymentMethod";
import DiscoverProjects from "./component/DiscoverProjects/DiscoverProjects";
import AdminDashboard from "./component/New Dashboard/AdminDashboard";
import Admin from "./component/New Dashboard/Pages/Admin/Admin";
import Project from "./component/New Dashboard/Pages/Project/Project";
import ADashboard from "./component/New Dashboard/Pages/ADashboard/ADashboard";
import DiscoveryOverlay from "./component/discoveryOverlay/discoveryOverlay";
import DashboardList from './component/Dashborad/Layer/Dashboard/DashboardList';
import Investerinfo from "./component/discoveryOverlay/TabsDiscovers/Investerinfo/Investerinfo";
import { createContext, useContext } from "react"
import { MyGlobalContext } from "./MyGlobalContext";





// type myProps = {
//   ProjectId:string,
//   ID:string
// };
const App = () => {
  const [userIdd, setUserIdd] = React.useState<string>('Not requried');
  return (
    <>
 {/* <MyGlobalContext.Provider value= {{ userId, setUserId }}>
    <Categories/>
  </MyGlobalContext.Provider> */}
 {/* <MyGlobalContext.Provider value = {userId,setUserId, email,setEmail }> */}


 <MyGlobalContext.Provider value= {{userIdd, setUserIdd}}>  

 </MyGlobalContext.Provider>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/create-project/:projectId" element={<PostProject />} />
        <Route path="/project" element={<StartProject />} />
        <Route path="/projectoverview" element={<ProjectOverview />} />
        <Route path="/location/:projectId" element={<Location />} />
        <Route path="/discoverprojects" element={<DiscoverProjects />} />
        {/* <Route path="/location/:projecId" element={<Location{...projectId}/>} /> */}
        {/* <Route
  path='/project/:id'
  render={({ Location }) => {
    const { state } = Location;
    return <ProjectDetails project={state.project} /> 
  }}
/> */}

        {/* <Route element={<PrivateCopmonent />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/iv" element={<DashboardList />} />
          <Route path="/dashboard/disbursment" element={<Disbursment />} />
          <Route path="/dashboard/funding" element={<Funding />} />
          <Route path="/dashboard/promotion" element={<Promotion />} />
          <Route path="/dashboard/roi" element={<Roi />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/myinvestment" element={<MyInvestment />} />
          <Route path="/myaccount" element={<MyAcount />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/discovery_overlay" element={<DiscoveryOverlay />} />
          <Route path="/investerinfo" element={<Investerinfo />} />
          <Route path="/myredux" element={<MyRedux />} />
          <Route path="/page2" element={<Page2 />} />
          //Create Project Tab Route///
          <Route
            path="/creatproject/:projectId"
            element={<CreateProjectTabs />}
          />
          <Route path="/basic/:projectId" element={<Basic />} />
          <Route path="/fundingtab/:projectId" element={<FundingTab />} />
          <Route path="/story/:projectId" element={<Story />} />
          <Route path="/myteam/:projectId" element={<MyTeam />} />
          <Route path="/paymentmethod/:projectId" element={<PaymentMethod />} />
       
////Admin DashBoard
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/admindashboard/adashboard" element={<ADashboard />} />
        <Route path="/admindashboard/admin" element={<Admin />} />
        <Route path="/admindashboard/projectdetails" element={<Project />} />
        
        {/* </Route> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

    
      
    
    </>
  );
};

export default App;
