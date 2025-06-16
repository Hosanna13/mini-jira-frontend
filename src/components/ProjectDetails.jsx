import React, {useState} from "react";
import "./ProjectDetails.css";
export default function ProjectDetails( {project, onClose}) {
   // fake list
    const [tasks, setTasks] = useState([
        {id: 1, title:'Set up repo', status: "To Do"},
        {id: 2, title: 'Write frontend layout', status: 'In Progress'},
        {id: 3, title:'Connect Backend', status: 'To Do'}
    ])

    // New State for form input
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("To Do");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            status,
        };

        setTasks([...tasks, newTask]);
        setTitle("");
        setStatus("To Do");
    };


    return (
        <div className='detial-popup'>
            <div className='detial-card'>
                <button onClick={onClose}> x</button>
                <h2> {project.name}</h2>
                <p> {project.description}</p>

                <h3 style={ {marginTop: "1.5rem"}}> Tasks
                </h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className={`task ${task.status.replace(" ", "-").toLowerCase()}`}>
                            <strong> {task.title}</strong> - <em> {task.status}</em>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleAddTask} className="task-form">
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <select value = {status} onChange={(e) => setStatus((e.target.value))}>
                        <option> To Do</option>
                        <option> In Progress</option>
                        <option> Done </option>
                    </select>
                    <button type="submit"> Add Task</button>
                </form>
            </div>
        </div>
    )
}