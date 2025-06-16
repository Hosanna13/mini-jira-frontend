import React, { useState } from 'react';
import './ProjectList.css';
import ProjectDetails from './ProjectDetails';
import NewProjectForm from './NewProjectForm';

export default function ProjectList() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Marketing website', description: 'landing page build' },
        { id: 2, name: 'iOS App', description: 'iOS version of the main app' },
        { id: 3, name: 'Backend Refactor', description: 'Switching to microservices' }
    ]);

    const [selectedProject, setSelectedProject] = useState(null);

    const addProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    return (
        <div className="project-list-wrapper">
            <h1>All Projects</h1>

            <NewProjectForm onAdd={addProject} />

            <div className="project-grid">
                {projects.map((project) => (
                    <div
                        className="project-card"
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <ProjectDetails
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}
