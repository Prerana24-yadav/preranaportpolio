import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Sales Dashboard (Power BI)",
      desc: "Designed an interactive dashboard tracking sales growth, region-wise KPIs, and top-performing products using Power BI and DAX functions.",
      tech: "Power BI, SQL, Excel, DAX",
    },
    {
      id:1,
      title: "Python Data Cleaning Automation",
      desc: "Developed a Python script to automatically clean Excel datasets, remove null values, and generate visual reports with Pandas and Matplotlib.",
      tech: "Python, Pandas, seborn Matplotlib",
    },
    {
      id:2,
      title: "React Portfolio Website",
      desc: "Built a responsive personal portfolio website using React, React Router, and modern CSS3 animations.",
      tech: "React, HTML, CSS3, JS ES6",
    },
    {
      id:3,
      title: "Restaurant Managment System",
      desc: "IT includes modules for customer management admin management and menu operations.",
      tech: "HTML CSS Javascript",
    },
    { 
      id:4,
      title: "constructions Managment system",
      desc:  " IT in website include Make your business shine online with a custom construction website designed just for you by a professional designer.",
      tech:  "HTML CSS Javascript React.js Firebase",
        
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="card-grid">
        {projects.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small><b>Technologies:</b> {p.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
