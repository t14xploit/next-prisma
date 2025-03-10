"use client";

import { Input } from "@/components/ui/input";
import { createProduct } from "./actions";
import { useActionState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


export default function CreateProductForm() {
    const [state, formAction, isPending] = useActionState(createProduct, {message: ""});

    return (
        <form className="space-y-4" action={formAction}>

            {state.message && <p>{state.message}</p>}
            <div>
                <Label htmlFor="name" >
                    Name
                </Label>
                <Input
                    name="name"
                    type="text"
                    id="name"
                />
            </div>
            <div>
                <Label htmlFor="price" >
                    Price
                </Label>
                <Input
                name="price"
                    type="text"
                    id="price"
                />
            </div>
            <div>
                <Label htmlFor="image" >
                    Image
                </Label>
                <Input
                name="image"
                    type="text"
                    id="image"
                />
            </div>
            <div>
                <Checkbox name="inStock" id="inStock" />
                <Label htmlFor="inStock" >
                    In Stock
                </Label>
            </div>
            <div>
                <Label htmlFor="description" >
                    Description
                </Label>
                <Textarea
                name="description"
                    id="description"
                ></Textarea>
            </div>
            <Button type="submit" disabled={isPending}>{isPending?"Submitting" : "Submit"}</Button>
        </form>

    )
}