"use server";


export  async function createProduct(prevState:unknown, formData: FormData) {
const obj = Object.fromEntries(formData.entries());
console.log(obj);
return{
    message:"Product created!",
};
}
