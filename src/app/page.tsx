import {prisma} from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";


export default async function Home() {
const products = await prisma.product.findMany();

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h1 className="text-2xl font-bold">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 ">
      {products.map((prod)=>(
        <ProductCard key={prod.id} product={prod}/>
      ))}


      </div>
    </div>
  );
}
