import { useState } from "react";

export function useDoubleHalfState(): [number, (newVal: number) => void] {
    return useState<number>(10);
}
