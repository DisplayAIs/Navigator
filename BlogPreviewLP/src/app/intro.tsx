"use client";

import React from "react";

const Intro: React.FC = () => {
  // Social links stored dynamically
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com",
      icon: "/Assets/logo-github.svg", // Replace with your actual path
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com",
      icon: "./Assets/logo-x.svg", // Replace with your actual path
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "/Assets/logo-linkedin.svg", // Replace with your actual path
    },
    {
      id: 4,
      name: "Custom Link",
      url: "https://your-link.com",
      icon: "../Assets/logo-frontend-mentor.svg", // Replace with your actual path
    },
  ];

  return (
    <section
      className={`max-w-5xl mx-auto text-center py-6 px-4 border border-gray-300 rounded-lg shadow-md`}
    >
      <h1 className="text-4xl font-bold mb-4">
        Hi, I'm Paulina <span role="img" aria-label="waving hand">👋</span>
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        I'm on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I'm not at my desk, you'll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who's learning to code. Welcome to my corner of the internet, and thanks for stopping by!
      </p>
      {/* Dynamically render social links */}
      <div className="flex justify-center space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={link.icon} alt={link.name} className="w-8 h-8" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Intro;
