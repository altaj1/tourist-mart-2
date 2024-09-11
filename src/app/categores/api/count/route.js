import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    const db =await connectDB()
    const productsCollection = db.collection('products')
    
    try {
        const count = await productsCollection.countDocuments();
        return NextResponse.json({count})
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
}