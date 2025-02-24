"use server";


export  async function createProduct(formData: FormData) {
const obj = Object.fromEntries(formData.entries());
console.log(obj);
}
