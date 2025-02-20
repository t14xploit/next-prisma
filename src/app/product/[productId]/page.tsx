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
    <div>Details</div>
  )
}
