import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={editMode}
                    onChange={(e) => {
                        setEditMode(e.target.checked);
                    }}
                />
            </div>
            {!editMode && (
                <p style={{ marginTop: "8px" }}>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            {editMode && (
                <div style={{ marginTop: "8px" }}>
                    <label htmlFor="name-field">Name</label>
                    <input
                        id="name-field"
                        type="text"
                        role="textbox"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label htmlFor="student-check">Student</label>
                    <input
                        id="student-check"
                        type="checkbox"
                        role="checkbox"
                        aria-label="Student"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}
