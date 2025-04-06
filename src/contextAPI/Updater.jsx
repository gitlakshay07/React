import React, { useState } from "react";
import { useContext } from "react";
import { Data } from "./Provider";

const Updater = () => {
    const { updateUser } = useContext(Data);
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newName.trim()) {
            updateUser(newName);
            setNewName("");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter New Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Updater;