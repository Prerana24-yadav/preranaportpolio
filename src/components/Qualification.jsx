import React from "react";

export default function Qualification() {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "Shivaji University, Kolhapur",
      year: "2021",
      score: "88%",
      desc: "Specialized in computer fundamentals, database management, and programming concepts.",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      college: "D.Y. Patil Agriculture & Technical University, Talsande",
      year: "2026",
      score: "83%",
      desc: "Focused on advanced analytics, data science, and software engineering.",
    },
  ];

  return (
    <section className="qualification">
      <h2>Educational Qualification</h2>
      <div className="card-grid">
        {education.map((edu, i) => (
          <div key={i} className="card">
            <h3>{edu.degree}</h3>
            <p>{edu.college}</p>
            <small><b>Completed:</b> {edu.year}</small>
            <p>{edu.desc}</p>
            <p><b>Percentage:</b> {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
