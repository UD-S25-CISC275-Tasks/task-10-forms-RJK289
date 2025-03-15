import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎃" | "🎄" | "🎇" | "🎆" | "💝";
    const ALPHABET: Holiday[] = ["🎃", "🎄", "🎇", "🎆", "💝"];
    const YEAR: Holiday[] = ["💝", "🎇", "🎃", "🎄", "🎆"];
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function advanceByAlphabet(): void {
        const index = ALPHABET.indexOf(holiday);
        setHoliday(ALPHABET[(index + 1) % ALPHABET.length]);
    }

    function advanceByYear(): void {
        const index = YEAR.indexOf(holiday);
        setHoliday(YEAR[(index + 1) % YEAR.length]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
