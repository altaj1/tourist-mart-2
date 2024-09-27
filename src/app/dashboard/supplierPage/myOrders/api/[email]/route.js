import { connectDB } from "@/lib/connectDB";
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken";
import { trace } from "next/dist/trace";
import { NextResponse } from "next/server"

export const GET =async (requset, {params})=>{
    const isveryfy = await  verifyUser()
    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    const db = await connectDB();
    const paymentsCollection = db.collection('payments');
    const email = params.email
    console.log(email, "this is email")
    try {
        
    } catch (error) {
        return NextResponse.json(error)
    }
    console.log("bro ouch thsi is orders page")
    return NextResponse.json("data not found")
}