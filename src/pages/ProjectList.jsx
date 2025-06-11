import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/projects")
            .then(response => setProjects(response.data))
            .catch(error => console.error("Error fetching projects: ", error));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>All Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <strong>{project.name}</strong> - {project.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}
