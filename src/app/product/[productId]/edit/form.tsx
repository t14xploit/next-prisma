"use client";

import { Product } from "@prisma/client";
import { editProduct } from "./actions";
import { useActionState } from "react";
import { ProductWithNumberPrice } from "./page";

type Props ={
    product:ProductWithNumberPrice;
}
export default function EditProductForm({product}:Props) {
    const [state, formAction, isPending] = useActionState(
        editProduct.bind(null, product.id), 
        {
            message: ""
        });

    return (
        <form className="space-y-4" action={formAction}>

            {state.message && <p>{state.message}</p>}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Name
                </label>
                <input
                    name="name"
                    type="text"
                    id="name"
                    defaultValue={product.name}
                    className="mt-1 block  px-4 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-200">
                    Price
                </label>
                <input
                name="price"
                    type="text"
                    id="price"
                    defaultValue={product.price}

                    className="mt-1 block  px-4 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-200">
                    Image
                </label>
                <input
                name="image"
                    type="text"
                    id="image"
                    defaultValue={product.image??" "}

                    className="mt-1 block  px-4 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="inStock" className="block text-sm font-medium text-gray-200">
                    In Stock
                </label>
                <input
                name="inStock"
                    type="checkbox"
                    id="inStock"
                    defaultChecked={product.inStock}
                    className="mt-1 block w-5 h-5 text-indigo-500 focus:ring-indigo-500 bg-gray-700 border-gray-600 rounded"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-200">
                    Description
                </label>
                <textarea
                name="description"
                    id="description"
                    defaultValue={product.description??""}

                    className="mt-1 block  px-4 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
            </div>
            <button type="submit" className="py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
            disabled={isPending}>{isPending?"Submitting" : "Submit"}</button>
        </form>

    )
}