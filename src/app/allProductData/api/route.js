import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server"

export const GET =async (request, {params})=>{
    const db =await connectDB()
    const productsCollection =await db.collection("products")
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get("searchText")
    console.log("GET all dada from server", searchText)
    return NextResponse.json("data not found")
}