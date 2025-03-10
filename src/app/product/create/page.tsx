import Link from "next/link"
import CreateProductForm from "./form"
import { Button } from "@/components/ui/button"

export default function CreateProductPage(){
    return(
        <div className="p-8 ">
            <h1 className="text-3xl text-center
             font-bold">Create Product</h1>
            <CreateProductForm/>
  
        </div>
    )
}