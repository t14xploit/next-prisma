import { Product } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


interface ProductCardProps {
  product: Product;
}


export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle> {product.name}</CardTitle>
        <CardDescription> ${product.price.toNumber()}</CardDescription>
      </CardHeader>
      <CardContent> {product.inStock ? <p className="text-green-500 text-sm">Available</p> : <p className="text-red-500 text-sm">Out of stock</p>}</CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/product/${product.id}`}>Details</Link>
        </Button>
      </CardFooter>

    </Card>
  )
}
