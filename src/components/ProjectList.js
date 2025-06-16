import React, { useEffect, useState } from 'react';
import './ProjectList.css';
import ProjectDetails from './ProjectDetails';
import NewProjectForm from './NewProjectForm';
import axios from 'axios';

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    // Load projects from backend
    const fetchProjects = () => {
        axios.get('http://localhost:8080/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error("Failed to fetch projects: ", err));
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className="project-list-wrapper">
            <h1>All Projects</h1>

            <NewProjectForm onProjectCreated={fetchProjects} />

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