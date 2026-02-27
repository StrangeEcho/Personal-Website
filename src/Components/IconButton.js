
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoDocumentAttachSharp } from "react-icons/io5";

import './Styles/IconButton.css'; 

export const GithubButton = () => {
    return (
        <a
            href="https://github.com/StrangeEcho"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
        >
            <FaGithub className="icon" />
            GitHub
        </a>
    );
};

export const LinkedInButton = () => {
    return (
        <a
            href="https://www.linkedin.com/in/ruben-thomas-4b77b5289/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
        >
            <FaLinkedin className="icon" />
            LinkedIn
        </a>
    );
};

export const EmailButton = () => {
    return (
        <a
            href="mailto:ruben.thomas0405@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
        >
            <MdEmail className="icon" />
            Email
        </a>
    );
};

export const ResumeButton = () => {
    return (
        <a
            href="mailto:ruben.thomas0405@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-button"
        >
            <IoDocumentAttachSharp className="icon"/>
            Resume
        </a>
    );
};