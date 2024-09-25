import { connectDB } from "@/lib/connectDB";
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken";
import { trace } from "next/dist/trace";
import { NextResponse } from "next/server";

export const PUT =async (request, {params})=>{
    const isveryfy = await  verifyUser()

    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    try {
        const db = await connectDB();
        const userCollection = db.collection("users")
        const userData = await request.json();
        const email = params.email;
    
        const updatedoc = {
            $set:{...userData}
        }
        const respose = await userCollection.updateOne({email}, updatedoc)
        console.log(respose)
        return NextResponse.json({massage:"data not found"})
    } catch (error) {
        return NextResponse.json({massage:"data not found"})
    }
}