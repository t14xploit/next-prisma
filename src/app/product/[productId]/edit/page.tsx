import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Params = Promise<{
    productId: string;
}>;

type Props ={
    params:Params;
}

export default async function EditProductPage(props:Props) {
  
  const params = await props.params;
  const productId = parseInt(params.productId);
  
  const product = await prisma.product.findUnique({
    where:{
        id:productId
    },
  });
if(!product){
    notFound();
}

    return (
    <div> Product {product.name} Edit page</div>
  )
}
