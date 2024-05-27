import React, { useEffect, useRef, useState } from "react";
import styles from "./BlogPage.module.css";
import blogPosts from "../../Assets/JSON/BlogPosts.json";
import { FaSearch } from "react-icons/fa";

const BlogPage = () => {
  const cardRefs = useRef([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => card.classList.add(styles.animate), index * 100);
        }
      });
    }
  }, [shouldAnimate]);

  const truncateDescription = (description, length) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.tags}>
          <span>Cães</span>
          <span>Gatos</span>
          <span>Comportamento</span>
          <span>Saúde</span>
          <span>Dicas</span>
        </div>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar conteúdo"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.separator}></div>
      <h1>Recente no Blog</h1>

      <div className={styles.featuredSection}>
        <div className={styles.featuredPost}>
          <img src={[blogPosts[0].image]} alt={blogPosts[0].title} />
          <p className={styles.date}>{blogPosts[0].date}</p>
          <h2 className={styles.title}>{blogPosts[0].title}</h2>
          <p className={styles.description}>
            {truncateDescription(blogPosts[0].description, 150)}
          </p>
          <p className={styles.tags}>
            {blogPosts[0].tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.sidePosts}>
          {blogPosts.slice(1, 3).map((post, index) => (
            <div className={styles.sidePost} key={index}>
              <img src={post.image} alt={post.title} />
              <div className={styles.postContent}>
                <p className={styles.date}>{post.date}</p>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.description}>
                  {truncateDescription(post.description, 100)}
                </p>
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
      <h1>Tudo no Blog</h1>
      <div className={styles.postsGrid}>
        {blogPosts.slice(3).map((post, index) => (
          <div
            className={styles.card}
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className={styles.imagePlaceholder}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.content}>
              <p className={styles.date}>{post.date}</p>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.description}>
                {truncateDescription(post.description, 100)}
              </p>
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
  );
};

export default BlogPage;
