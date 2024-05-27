import React, { useRef, useEffect } from "react";
import AdoptionSteps from "../../components/AdoptionSteps/AdoptionSteps";
import PetMatchInfo from "../../components/PetMatchInfo/PetMatchInfo";
import styles from "./Home.module.css";
import AnimaisProximos from "../../components/Home/AnimaisProximos/AnimaisProximos";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import RecentBlogPosts from "../../components/Home/RecentBlogPosts/RecentBlogPosts";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";
import MainSearch from "../../components/Home/Hero/MainSearch";

const Home = () => {
  const adoptionStepsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (adoptionStepsRef.current) {
      observer.observe(adoptionStepsRef.current);
    }

    return () => {
      if (adoptionStepsRef.current) {
        observer.unobserve(adoptionStepsRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <MainSearch />
      </div>
      <div className={styles.servicosContainer} ref={adoptionStepsRef}>
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
