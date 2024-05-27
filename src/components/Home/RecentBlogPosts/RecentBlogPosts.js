import React from "react";
import styles from "./RecentBlogPosts.module.css";
import blogPosts from "../../../Assets/JSON/BlogPosts.json";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const RecentBlogPosts = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.titleAndCTA}>
        <div>
          <h1>Últimos Artigos do Blog </h1>
          <p>Aprenda mais sobre como cuidar melhor dos seus bichinhos.</p>
        </div>
        <button onClick={() => navigate("/blog")} className={styles.button}>
          <p>Ir para o Blog</p> <FaArrowRight />
        </button>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {blogPosts.map((post, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imagePlaceholder}>
                <img src={post.image} alt={post.title} />
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
