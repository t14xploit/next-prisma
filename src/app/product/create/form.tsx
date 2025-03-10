"use client";

import { Input } from "@/components/ui/input";
import { createProduct } from "./actions";
import { useActionState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";


export default function CreateProductForm() {
    const [state, formAction, isPending] = useActionState(createProduct, { message: "" });

    return (
        <form className="space-y-4 max-w-4xl mx-auto" action={formAction}>

            {state.message && (
                <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="w-4 h-4" />
                    <AlertTitle>Error!</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
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
                <Label htmlFor="description" >
                    Description
                </Label>
                <Textarea
                    name="description"
                    id="description"
                ></Textarea>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox name="inStock" id="inStock" />
                <Label htmlFor="inStock" >
                    In Stock
                </Label>
            </div>
            <div className="flex gap-2">
                <Button type="submit" disabled={isPending}>{isPending ? "Submitting" : "Submit"}</Button>
                <Button asChild variant="secondary">
                    <Link href="/">Go back</Link>
                </Button>
            </div>

        </form>

    )
}