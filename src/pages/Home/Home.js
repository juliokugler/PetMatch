import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import AdoptionSteps from "../../components/AdoptionSteps/AdoptionSteps";
import PetMatchInfo from "../../components/PetMatchInfo/PetMatchInfo";
import styles from "./Home.module.css";
import AnimaisProximos from "../../components/Home/AnimaisProximos/AnimaisProximos";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import RecentBlogPosts from "../../components/Home/RecentBlogPosts/RecentBlogPosts";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <Hero />
      </div>

      <div className={styles.servicosContainer}>
        <AdoptionSteps />
      </div>
      <div className={styles.infoContainer}>
        <PetMatchInfo />
      </div>
      <div className={styles.animaisProximosContainer}>
        <AnimaisProximos />
      </div>
      <div className={styles.infoContainer}>
        <Testimonials />
      </div>
      <div className={styles.animaisProximosContainer}>
        <RecentBlogPosts />
      </div>
      <div className={styles.bannerAjudaContainer}>
        <BannerAjuda />
      </div>
    </div>
  );
};

export default Home;
