'use client';

import { useFormState } from "react-dom";
import PendingComponent from "./PendingComponent";

export default function FormComponent({ addNum }: any) {
    const [state, formAction] = useFormState(addNum, null);

    return (
        <form action={formAction}>
            <button type="submit">Add Num</button>

            <PendingComponent />
            <p>{state}</p>
        </form>
    )
}