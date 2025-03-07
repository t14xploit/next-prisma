
"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { deleteProduct } from '@/actions/product';


interface DeleteProductButtonProps{
    productId:number;
}

export default function DeleteProductButton({productId}:DeleteProductButtonProps) {
 const [isPending, setIsPending] = useState(false);

 
 async function handleClick(){
    const result = confirm("Are you sure you want to delete this product?");
    if(!result) return;
    setIsPending(true);
    await deleteProduct(productId);
    setIsPending(false);
 }
 
    return (
    <Button size="lg" onClick={handleClick} disabled={isPending}>{isPending? "Deleting...":"Delete product"}</Button>
  )
}
