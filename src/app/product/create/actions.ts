"use server";

import { redirect } from "next/navigation";
import {prisma} from "@/lib/prisma"
import {z} from "zod";

const createSchema = z.object({
    name:z.string().nonempty(),
    price:z.coerce.number().min(0),
    description:z.string().max(1000).optional(),
    inStock:z.coerce.boolean().default(false),
    image:z.string().url().optional(),
});

export  async function createProduct(prevState:unknown, formData: FormData) {
const obj = Object.fromEntries(formData.entries());

const result = createSchema.safeParse(obj);
// console.log(obj);

// const name = formData.get("name") as string;
// const price = Number(formData.get("price") as string);

try{
    await prisma.product.create({
        data:{
            name,
            price,
        },
    });
} catch(error){
    console.log(error);
    return{
        message: "Failed to create a product!",
    };
}

 redirect("/");


}
