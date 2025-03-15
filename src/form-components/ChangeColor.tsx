import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "pink",
        "purple",
        "orange",
        "black",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string) => (
                <div key={c}>
                    <input
                        type="radio"
                        name="color"
                        role="radio"
                        value={c}
                        checked={color === c}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                    {c}
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: color,
                    marginTop: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
