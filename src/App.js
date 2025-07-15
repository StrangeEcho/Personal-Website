import React from "react";
import "./App.css";
import { EmailButton, GithubButton, LinkedInButton } from "./Components/IconButton";
import { TbBrandCSharp, TbSql} from "react-icons/tb";
import { FaPython, FaJs, FaReact, FaHtml5, FaCss3, FaGit, FaGithub, FaGitlab} from "react-icons/fa"
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm, SiPycharm, SiRider, SiSqlite} from "react-icons/si";

export default function App() {
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

          {/* Skills & Technologies Section */}
          <section className="section">
            <h2 className="section-title">Skills & Technologies</h2>
            <h2 className="section-subtitle">Programming Languages</h2>
            <p>
              <FaPython className="language-icon"/>
              <TbBrandCSharp className="language-icon"/>
              <FaJs className="language-icon"/>
            </p>

            <h2 className="section-subtitle">Web Development</h2>
            <p>
              <FaReact className="language-icon"/>
              <FaHtml5 className="language-icon"/>
              <FaCss3 className="language-icon"/>
            </p>

            <h2 className="section-subtitle">Tools</h2>
            <p>
              <FaGit className="language-icon"/>
              <VscVscode className="language-icon"/>
              <SiWebstorm className="language-icon" />
              <SiPycharm className="language-icon"/>
              <SiRider className="language-icon"/>
              <TbSql className="language-icon"/>
              <SiSqlite className="language-icon"/>
            </p>

            <h2 className="section-subtitle">Miscellaneous</h2>
            <p>
              <FaGithub className="language-icon"/>
              <FaGitlab className="language-icon"/>
            </p>
          </section>

          {/* Contact & Links Section */}
          <section className="section">
            <h2 className="section-title">Contact & Links</h2>
            <GithubButton />
            <LinkedInButton />
            <EmailButton />
          </section>
        </main>
      </div>
  );
}
