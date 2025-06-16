import React, { useState } from "react";
import axios from "axios";

export default function NewProjectForm({ onProjectCreated }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !description.trim()) return;
        try {
            await axios.post('http://localhost:8080/api/projects', { name, description });
            setName("");
            setDescription("");
            if (onProjectCreated) onProjectCreated();
        } catch (err) {
            alert("Failed to create project.");
        }
    };

    return (
        <form className="new-project-form" onSubmit={handleSubmit}>
            <h2>Create New Project</h2>
            <input
                type="text"
                placeholder="Project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Project</button>
        </form>
    );
}