"use server";

import { redirect } from "next/navigation";
import {prisma} from "@/lib/prisma"

export  async function createProduct(prevState:unknown, formData: FormData) {
// const obj = Object.fromEntries(formData.entries());
// console.log(obj);

const name = formData.get("name") as string;
const price = Number(formData.get("price") as string);

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
