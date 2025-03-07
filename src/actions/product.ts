"use server";
import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";
export async function deleteProduct(productId:number){
    
    await prisma.product.delete({
        where:{
            id:productId
        }
    });
redirect("/");
}