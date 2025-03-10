import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DeleteProductButton from "@/components/DeleteProductButton";
import Link from "next/link";

type Params = Promise<{
    productId: string;
}>;

export default async function ProductDetailsPage(props: { params: Params }) {
    const params = await props.params;
    const productId = Number(params.productId)

    const product = await prisma.product.findUnique({
        where: {
            id: productId,
        }
    });


    if (!product) {
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
                        <div className="flex  gap-4">

                        <Button size="lg" disabled={!product.inStock}  >
                            Add to cart
                        </Button>
                        <Button asChild size="lg" variant="secondary">

                            <Link href={`/product/${product.id}/edit`} 
                            >
                                Edit Product            </Link>
                        </Button>
                        <DeleteProductButton productId={product.id} />
                                </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
