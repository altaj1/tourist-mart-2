import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server"

export const GET =async (request, {params})=>{
    const db =await connectDB()

    const productsCollection =await db.collection("products")
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get("searchText")
    console.log("GET all dada from server", searchText)
    const page = searchParams.get("page");

    try {
        const query = {
            name:{ $regex: String(searchText), $options: 'i' }
        }
        const result = await productsCollection.find(query).sort({sellCount: -1}).skip(page * 12).limit(12).toArray()
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
    
}