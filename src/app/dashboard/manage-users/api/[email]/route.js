import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";


export const GET = async (request, {params}) =>{
    const db = await connectDB();
    const userCollection = db.collection("users")
  
    try {
        const resp = await userCollection.findOne({email:params.email})
        return NextResponse.json({resp})
       
    } catch (error) {
        return NextResponse.json({message : "No Data Found"})
    }
    
}