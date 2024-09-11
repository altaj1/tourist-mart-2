import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    const db = await connectDB()
    const soppingCartCollection = db.collection("soppingCart")
   
    try {
        const respose = await soppingCartCollection.find({addEmail: params.email}).toArray()
        // console.log(respose, "this is response")
        return NextResponse.json({data:respose})
    } catch (error) {
        console.log(error)
    }
}