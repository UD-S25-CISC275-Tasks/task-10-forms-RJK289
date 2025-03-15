import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    function useAttempt() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempt() {
        const toAdd = parseInt(request) || 0;
        setAttempts(attempts + toAdd);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <input type="number" value={request} onChange={updateRequest} />
            <button onClick={useAttempt} disabled={attempts === 0}>
                use
            </button>
            <button onClick={gainAttempt}>gain</button>
        </div>
    );
}
