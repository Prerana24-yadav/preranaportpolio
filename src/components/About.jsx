import React from "react";
import aboutImg from "../assets/pre.jfif";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={aboutImg} alt="Prerana" />
        <div className="about-text">
          <p>
            Hello! I’m <b>Prerana 🦋</b>, a passionate <b>Data Analyst</b> with a knack for transforming 
            raw data into meaningful insights. I enjoy designing elegant dashboards, building 
            clean data pipelines, and visualizing trends that tell powerful business stories.
          </p>
          <p>
            My technical expertise includes:
            <ul>
              <li>Power BI – Interactive dashboards and KPI tracking</li>
              <li>SQL – Writing complex queries and optimizing data models</li>
              <li>Python – Data cleaning, Pandas, and Matplotlib visualization</li>
              <li>Excel – Data modeling, pivot tables, and automation</li>
              <li>React JS – Frontend design for dashboards & portfolios</li>
            </ul>
          </p>
          <p>
            I hold a <b>BCA</b> and currently pursuing my <b>MCA</b> from 
            D.Y. Patil Agriculture & Technical University, Talsande.  
            My passion for learning drives me to explore <b>cloud computing (AWS)</b> 
            and <b>DevOps</b> to integrate data analytics with scalable systems.
          </p>
          <p>
            Beyond analytics, I love exploring tech blogs, designing websites, 
            and mentoring others who want to start their journey in data analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
