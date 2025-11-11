import React from "react";
import myPhoto from "../assets/pre.jfif";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h1>Hi, I'm <span>Prerana 🦋</span></h1>
          <h2 className="typing">Data Analyst | Power BI | Python | SQL | React Developer| core java</h2>
          <p>
            I’m a <b>Data Analyst</b> with a deep passion for transforming raw datasets 
            into business insights. I specialize in <b>Power BI, SQL, Python, and Excel</b> to 
            create interactive dashboards and automated data workflows.
          </p>
          <p>
            My analytical mindset and visualization skills help organizations 
            discover trends, identify growth opportunities, and make data-driven decisions.  
            I also explore modern technologies like <b>AWS, Docker, and DevOps</b> to stay ahead 
            in the data and software world. and i am also know backed technologies like MYSQL and Firebase I am also do
            Front end technologies like HTML CSS Jvascript React js
          </p>
          <div className="home-buttons">
            <a href="/projects" className="btn btn-primary">View My Work</a>
            <a href="/contact" className="btn btn-secondary">Hire Me</a>
          </div>
        </div>

        <div className="home-image">
          <img src={myPhoto} alt="Prerana" />
        </div>
      </div>
    </section>
  );
}
