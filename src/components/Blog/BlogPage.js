import React from "react";
import styles from "./BlogPage.module.css";
import blogPosts from "../../Assets/JSON/BlogPosts.json";
import lupa from "../../Assets/Icons/lupa.png";
import blogPost1 from "../../Assets/Images/BlogImages/blogPost1.png";
import blogPost2 from "../../Assets/Images/BlogImages/blogPost2.png";
import blogPost3 from "../../Assets/Images/BlogImages/blogPost3.png";
import blogPost4 from "../../Assets/Images/BlogImages/blogPost4.png";
import blogPost5 from "../../Assets/Images/BlogImages/blogPost5.png";
import blogPost6 from "../../Assets/Images/BlogImages/blogPost6.png";
import blogPost7 from "../../Assets/Images/BlogImages/blogPost7.png";
import blogPost8 from "../../Assets/Images/BlogImages/blogPost8.png";
import blogPost9 from "../../Assets/Images/BlogImages/blogPost9.png";
import blogPost10 from "../../Assets/Images/BlogImages/blogPost10.png";
import blogPost11 from "../../Assets/Images/BlogImages/blogPost11.png";
import blogPost12 from "../../Assets/Images/BlogImages/blogPost12.png";
import { FaSearch } from "react-icons/fa";

const imageMap = {
  "blogPost1.png": blogPost1,
  "blogPost2.png": blogPost2,
  "blogPost3.png": blogPost3,
  "blogPost4.png": blogPost4,
  "blogPost5.png": blogPost5,
  "blogPost6.png": blogPost6,
  "blogPost7.png": blogPost7,
  "blogPost8.png": blogPost8,
  "blogPost9.png": blogPost9,
  "blogPost10.png": blogPost10,
  "blogPost11.png": blogPost11,
  "blogPost12.png": blogPost12,
};

const BlogPage = () => {
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
          <img src={imageMap[blogPosts[0].image]} alt={blogPosts[0].title} />
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
              <img src={imageMap[post.image]} alt={post.title} />
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
          <div className={styles.card} key={index}>
            <div className={styles.imagePlaceholder}>
              <img src={imageMap[post.image]} alt={post.title} />
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
