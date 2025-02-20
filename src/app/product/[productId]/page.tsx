import {prisma} from "@/lib/prisma";
import { notFound } from "next/navigation";


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
    <div className="space-y-4 p-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p>${product.price.toNumber()}</p>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni dolores tenetur perferendis maxime suscipit error unde exercitationem repudiandae laudantium animi ipsum architecto totam molestias dolorum numquam, est doloribus veritatis?
        </p>
        {product.inStock? (
            <p className="text-green-500">Available</p>

        ): (
            <p className="text-red-500">Out of stock</p>
        )}
        <button className="text-center px-3 py-2 rounded-lg bg-slate-900 text-white disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>Add to cart</button>
    </div>
  )
}
