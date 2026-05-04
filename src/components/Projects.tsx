import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Secure File Sharing Website</h3>
        <p>
          Built a responsive secure file sharing platform using HTML, CSS, and JavaScript.
          Focused on clean UI and smooth animations for an intuitive experience.
        </p>
      </div>

      <div className="project-card">
        <h3>Personal Portfolio Website</h3>
        <p>
          This React + TypeScript portfolio highlights my education, projects, and contact links.
        </p>
      </div>
    </section>
  );
};

export default Projects;
