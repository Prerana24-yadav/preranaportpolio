import React from "react";

export default function Certification() {
  const certs = [
    {
      title: "Introduction to Data Analytics",
      org: "google",
      year: "2023",
      
    },
    {
      title: "Digital Transformation with Google Cloud",
      org: "google",
      year: "2022",
      
    },
    {
      title: "SQL Fundamentals",
      org: "HackerRank",
      year: "2022",
      
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      org: "Amazon Web Services",
      year: "2024",
      
    },
    {
      title: "Introduction to Git and GitHub",
      org: "SVL Automation",
      year: "2024",

      


    },
    {
      title: "TECHVERSE 2K25 Byte Battles coding Event",
      org: "ISTE",
      year: "2024",



    }
  ];

  return (
    <section className="certification">
      <h2>Certifications</h2>
      <div className="card-grid">
        {certs.map((c, i) => (
          <div key={i} className="card">
            <h3>{c.title}</h3>
            <p><b>Issued by:</b> {c.org}</p>
            <p><b>Year:</b> {c.year}</p>
            <a href={c.link} target="_blank" rel="noreferrer" className="btn-link">
              
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
