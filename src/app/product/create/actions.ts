"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma"
import { z } from "zod";

const createSchema = z.object({
    name: z.string().nonempty(),
    price: z.coerce.number().min(0),
    description: z.string().max(1000).optional(),
    inStock: z.coerce.boolean().default(false),
    image: z.union([z.string().url(), z.literal("")]),

});

export async function createProduct(prevState: unknown, formData: FormData) {
    const obj = Object.fromEntries(formData.entries());

    const result = createSchema.safeParse(obj);
    if (!result.success) {

        console.log(result.error.flatten());
        return {
            message: "Failed to create a product!",
            error: result.error.message,
        };
    }



    // console.log(obj);

    // const name = formData.get("name") as string;
    // const price = Number(formData.get("price") as string);

    try {
        await prisma.product.create({
            data: {
                ...result.data,
                image: result.data.image || null,
                description: result.data.description || null
            }
        });
    } catch (error) {
        console.log(error);
        return {
            message: "Failed to create a product!",
        };
    }

    redirect("/");


}
