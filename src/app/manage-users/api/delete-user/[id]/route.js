import { connectDB } from "@/lib/connectDB";
import { verifyAdmin } from "@/lib/hooks/verifyToken/verifyToken";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"
const db = await connectDB();
const usersCollection = db.collection('users')
export const DELETE = async (request, {params})=>{
    // console.log(params)
    const isAdmin = await verifyAdmin();
    
    if (!isAdmin) {
        return NextResponse.json({message : "Something went wrong"}, )
    }
    const query = { _id: new ObjectId(params?.id) }
    try {
    const resp = await usersCollection.deleteOne(query);
    console.log(resp, "this is responce")
    return NextResponse.json({ message: "deleted the booking", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" });
  }
} 