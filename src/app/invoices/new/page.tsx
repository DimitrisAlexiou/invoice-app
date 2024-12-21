"use client";

import Container from "@/components/Container";
import FormComponent from "./components/Form";

export default function CreateInvoice() {
    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-bold">Create Invoice</h1>
                </div>

                <FormComponent />
            </Container>
        </main>
    );
}
