import React from "react";
import Navbar from "../TabComponent/components/navbar"
import HeroImg from "../TabComponent/components/heroImage"
import Mission from './components/mission';
import TeamSection from './components/teamSection';
import Management from './components/manageSection';
import AcademicPart from './components/acadPartners';
import Footer from './components/footer';
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Mission />
      <TeamSection />
      <Management />
      <AcademicPart />
      <Footer />
    </>
  );
};
export default AboutUs;