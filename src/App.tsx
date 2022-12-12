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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/create-project" element={<PostProject />} />
        <Route path="/project" element={<StartProject />} />
        <Route path="/projectoverview" element={<ProjectOverview />} />
        <Route path="/location/:projectId" element={<Location />} />
        <Route element={<PrivateCopmonent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/disbursment" element={<Disbursment />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/roi" element={<Roi />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/myinvestment" element={<MyInvestment />} />
          <Route path="/myaccount" element={<MyAcount />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/myredux" element={<MyRedux />} />
          <Route path="/page2" element={<Page2 />} />
          //Create Project Tab Route///
          <Route path="/creatproject" element={<CreateProjectTabs />} />
          <Route path="/creatproject" element={<Basic />} />
          <Route path="/creatproject" element={<FundingTab />} />
          <Route path="/creatproject" element={<Story />} />
          <Route path="/creatproject" element={<MyTeam />} />
          <Route path="/creatproject" element={<PaymentMethod />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
