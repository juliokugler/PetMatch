import React from "react";
import styles from "./Blog.module.css";
import Header2 from "../../components/Headers/Header2/Header2";
import BannerAjuda from "../../components/BannerAjuda/BannerAjuda";
import BlogPage from "../../components/Blog/BlogPage";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header2 sectionType="blog" />
      </div>
      <div>
        <BlogPage />{" "}
      </div>
      <BannerAjuda />
    </div>
  );
};

export default Blog;
