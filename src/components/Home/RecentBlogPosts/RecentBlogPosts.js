import React from "react";
import styles from "./RecentBlogPosts.module.css";
import blogPosts from "../../../Assets/JSON/BlogPosts.json";
import blogPost1 from "../../../Assets/Images/BlogImages/blogPost1.png";
import blogPost2 from "../../../Assets/Images/BlogImages/blogPost2.png";
import blogPost3 from "../../../Assets/Images/BlogImages/blogPost3.png";
import blogPost4 from "../../../Assets/Images/BlogImages/blogPost4.png";
import blogPost7 from "../../../Assets/Images/BlogImages/blogPost7.png";
import blogPost9 from "../../../Assets/Images/BlogImages/blogPost9.png";

const imageMap = {
  "blogPost1.png": blogPost1,
  "blogPost2.png": blogPost2,
  "blogPost3.png": blogPost3,
  "blogPost4.png": blogPost4,
  "blogPost7.png": blogPost7,
  "blogPost9.png": blogPost9,
};

const RecentBlogPosts = () => {
  return (
    <div className={styles.container}>
      <h1>Últimos Artigos do Blog </h1>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {blogPosts.map((post, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imagePlaceholder}>
                <img src={imageMap[post.image]} alt={post.title} />
              </div>
              <div className={styles.content}>
                <p className={styles.date}>{post.date}</p>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.description}>{post.description}</p>
                <p className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogPosts;
