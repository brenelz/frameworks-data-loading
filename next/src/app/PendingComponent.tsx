'use client';

import { useFormStatus } from "react-dom";

export default function PendingComponent() {
    const { pending } = useFormStatus();

    return (
        <p>{pending ? 'pending' : 'not pending'}</p>
    );
}