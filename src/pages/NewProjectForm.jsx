import { useState } from "react";
import axios from "axios";

export default function NewProjectFrom( { onProjectCreated}){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
}