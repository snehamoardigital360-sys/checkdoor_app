import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/_components/Header";



import StaggeredPropertySwiper from "@/_components/PropertiesLocation";
import Footer from "@/_components/Footer";
import TestimonialVertical from "@/_components/About";

import DevelopersCarousel from "@/_components/DevelopersCarousel";
import ExploreProject from "@/_components/ExploreProject";
import TravelHero from "@/_components/TravelHero";

export default function Home() {
  return (
    <div>
      <>
      <Header/>
    <TravelHero/>
  <StaggeredPropertySwiper/>
<DevelopersCarousel/>
 <TestimonialVertical/>
<ExploreProject/>
   <Footer/>
      </>
    </div>
  );
}
