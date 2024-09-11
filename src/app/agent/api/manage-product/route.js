import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST =async (request,{params})=>{
    const productData = await request.json()
    try {
        const db = await connectDB();
        const productsCollection = await db.collection("products")
        const resp = await productsCollection.insertOne(productData);
        return NextResponse.json({resp})
    } catch (error) {
        return NextResponse.json({error})
    }
   
}