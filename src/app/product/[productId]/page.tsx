import {prisma} from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

type Params = Promise<{
    productId: string;
}>;

export default async function ProductDetailsPage(props:{params:Params}) {
  const params = await props.params;
  const productId = Number(params.productId)
  
  const product = await prisma.product.findUnique({
    where: {
        id: productId,
    }
  });


  if(!product){
    notFound();
  }
    return (
    <div className="space-y-4 p-4 max-w-5xl mx-auto ">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p>${product.price.toNumber()}</p> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    {product.image && (
        <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-80 w-auto object-contain rounded-lg shadow"
        />
    )}
    <div className="flex flex-col items-center md:items-start">
        {product.description && (
            <p className="text-gray-700 text-sm md:text-base mb-4 max-w-xl text-center md:text-left">
                {product.description}
            </p>
        )}

        <div className="text-center md:text-left">
            {product.inStock ? (
                <p className="text-green-500 font-semibold">Available</p>
            ) : (
                <p className="text-red-500 font-semibold">Out of stock</p>
            )}
            <button
                className="mt-4 px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.inStock}
            >
                Add to cart
            </button>
        </div>
    </div>
</div>

        </div>
  )
}
