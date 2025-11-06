"use client";

import React, { useState } from "react";
import Header from "./Header";
import Intro from "./intro";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const blogPosts = [
    {
      title: "Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated",
      date: "February 17, 2025",
      description: "Discover how outdoor adventures can inspire and energize your coding journey.",
    },
    {
      title: "Reading for Inspiration: 5 Books That Shaped My Coding Journey",
      date: "February 14, 2025",
      description: "Check out these must-read books that provide motivation and insights for developers.",
    },
  ];

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"} min-h-screen`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Intro /> {/* Intro Section */}
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Latest Articles</h1>
        {blogPosts.map((post, index) => (
          <BlogPost 
            key={index} 
            title={post.title} 
            date={post.date} 
            description={post.description} 
          />
        ))}
      </main>
    </div>
  );
};

export default Blog;
