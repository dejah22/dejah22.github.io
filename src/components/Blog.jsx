import React from "react";
import "../styles/Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Intersection of AI and Emotion",
      snippet:
        "Exploring how machine learning can interpret and respond to human emotions — and the ethical considerations that come with it.",
    },
    {
      id: 2,
      title: "Choreography in the Age of Technology",
      snippet:
        "How motion capture and computer vision are changing the way we understand and design human movement.",
    },
    {
      id: 3,
      title: "Creative Research: Bridging Science and Art",
      snippet:
        "An exploration of interdisciplinary innovation, from computational creativity to embodied performance.",
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.snippet}</p>
            <Link to={`/blog/article${blog.id}`} className="read-more">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
