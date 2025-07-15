import React, {useEffect} from "react";
import "./App.css";

export default function App() {
  
  useEffect(() => {
    document.title = "Strange Echo Home Page";
  }, [])
  
  return (
      <div className="app-container">
        <header className="header">
          <div className="profile-header">
            <div>
              <h1 className="name">Ruben Thomas</h1>
              <p className="tagline">Aspiring Software Engineer | CIS Student | Tech Lover</p>
            </div>
          </div>
        </header>

        <main className="main-content">
          {/* About Section */}
          <section className="section">
            <h2 className="section-title">About Me</h2>
            <p className="section-text">
              I'm a passionate university student with a strong interest in the field of software engineering.
              Hoping to further my understanding of tech and fulfill my long-term dream and ambition of becoming a software engineer.
            </p>
          </section>

          {/* Projects Section */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            <ul className="project-list">
              <li className="project-item">
                <h3 className="project-title">Task Manager App (CIS445)</h3>
                <p className="project-description">Collaborative React app made to create, edit, and manage daily tasks with chart visualizations.</p>
                <a href="https://github.com/StrangeEcho/BAT-Task-Manager" className="project-link">View Code</a>
              </li>
              <li className="project-item">
                <h3 className="project-title">Banker System (CIS317)</h3>
                <p className="project-description">A terminal-based application made to emulate a banker-like experience while exhibiting CRUD operations.</p>
                <a href="https://github.com/StrangeEcho/CIS317-Final-Project" className="project-link">View Code</a>
              </li>
              <li className="project-item">
                <h3 className="project-title">Simple Tip Calculator & Tracker (CIS340)</h3>
                <p className="project-description">Seamless and easy to use Android tip tracking and calculator app for servers in the service industry.</p>
                <a href="https://github.com/StrangeEcho/SimpleTipCalculator/" className="project-link">View Code</a>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skills-list">
              <li>Languages: Python (strongest), C#, JavaScript</li>
              <li>Frameworks: React</li>
              <li>Tools: VSCode, WebStorm, PyCharm, Rider, Gitlab, Github, Git, SQL, SQLite</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="section">
            <h2 className="section-title">Links & Contact</h2>
            <p>Email: <a href="mailto:ruben.thomas0405@gmail.com" className="contact-link">ruben.thomas0405@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ruben-thomas-4b77b5289/" className="contact-link">Click Here</a></p>
            <p>Github: <a href="https://github.com/StrangeEcho" className="contact-link">Click Here</a></p>
          </section>
        </main>
      </div>
  );
}
