import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET =async (request, {params}) =>{
    const db =await connectDB();
    const productsCollection = await db.collection("products")
    try {
        const resp = await productsCollection.find({agent:params?.email}).toArray()
        return NextResponse.json({data:resp})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }

}