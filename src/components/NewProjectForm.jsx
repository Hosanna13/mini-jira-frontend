import React, {useState} from "react";

export default function NewProjectForm({ onAdd}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !description.trim()) return;

        const newProject = {
            id: Date.now(),
            name,
            description,
        };

        onAdd(newProject);
        setName("");
        setDescription("");
    };

    return (
        <form className = "new-project-form" on onSubmit={handleSubmit}>
            <h2> Create New Project</h2>
            <input
                type="text"
                placeholder="Project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <textarea
                placeholder="Description"
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit"> Add Project</button>
        </form>
    );

}