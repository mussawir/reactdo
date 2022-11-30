import React from "react";
import Featuredtopics from "../Featuredtopics/Featuredtopics";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hotoffthepress from "../Hotoffthepress/Hotoffthepress";
import Invertingverseprojectupdates from "../Invertingverseprojectupdates/Invertingverseprojectupdates";
import Readytomakemagic from "../Readytomakemagic/Readytomakemagic";
import Themaking from "../Themaking/Themaking";
import Trustsafety from "../Trustsafety/Trustsafety";
import Whattoexpect from "../Whattoexpect/Whattoexpect";
import Banner from "./../banner/Banner";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
    <Header/>
      <Banner />
      <Whattoexpect />
      <Featuredtopics />
      <Invertingverseprojectupdates />
      <Hotoffthepress />
      <Trustsafety />
      <Readytomakemagic />
      <Themaking />
      <Footer/>
    </>
  );
};

export default HomePage;
