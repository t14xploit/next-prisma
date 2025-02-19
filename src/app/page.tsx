import {prisma} from "@/lib/prisma";



export default async function Home() {
const products = await prisma.product.findMany();

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h1 className="text-2xl font-bold">
        Products
      </h1>
      {products.map((prod)=>(
        <div key={prod.id}>
          <h2>
            {prod.name}
          </h2>
        </div>
      ))}
    </div>
  );
}
