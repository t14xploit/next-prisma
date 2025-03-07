import { Product } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";


interface ProductCardProps {
    product:Product;
}


export default function ProductCard({product}:ProductCardProps) {
  return (
    <div className="text-black p-4 rounded-lg bg-slate-100 shadow space-y-2">
        <h2 className=" text-lg font-bold">
            {product.name}
        </h2>
        <p>${product.price.toNumber()}</p>
{/* convert toNumber (decimal from prisma ) */}
        {product.inStock? 
            <p className="text-green-500 text-sm">Available</p>: <p className="text-red-500 text-sm">Out of stock</p>}
             <Button asChild className="w-full">
              <Link href={`/product/${product.id}`} className=" text-center block px-3 py-2 rounded-lg bg-slate-900 text-white">

        Details
      </Link>
             </Button>
    </div>
  )
}
