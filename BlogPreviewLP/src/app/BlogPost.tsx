"use client";

import React from "react";

interface BlogPostProps {
  title: string;
  date: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4">{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default BlogPost;
