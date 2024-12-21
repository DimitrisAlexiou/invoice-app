import Form from "next/form"
import { SyntheticEvent, useState } from "react";
import { createAction } from "@/app/actions/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton";

const FormComponent = () => {
    const [state, setState] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent) {
        if (state === 'pending') {
            event.preventDefault();
            return;
        }
        setState('pending');
    }

    return (
        <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
            <div>
                <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
                    Billing Name
                </Label>
                <Input id="name" name="name" type="text" />
            </div>
            <div>
                <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
                    Billing Email
                </Label>
                <Input id="email" name="email" type="email" />
            </div>
            <div>
                <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
                    Value
                </Label>
                <Input id="value" name="value" type="text" />
            </div>
            <div>
                <Label htmlFor="description" className="block mb-2 font-semibold text-sm">
                    Description
                </Label>
                <Textarea id="description" name="description" />
            </div>
            <div>
                <SubmitButton />
            </div>
        </Form>
    );
}

export default FormComponent;