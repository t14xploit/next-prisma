import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditProductForm from "./form";
import { Product } from "@prisma/client";

type Params = Promise<{
    productId: string;
}>;

type Props ={
    params:Params;
}
export type ProductWithNumberPrice = Omit<Product, "price"> & {
price:number;
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
 const productWithNumberPrice: ProductWithNumberPrice = {
    ...product,
    price:product.price.toNumber(),
 }
    return (
    <div> 
        <h1>Edit Product</h1>
        <EditProductForm product={productWithNumberPrice}/>
    </div>
  )
}
