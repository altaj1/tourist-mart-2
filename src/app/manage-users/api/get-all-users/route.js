import { connectDB } from "@/lib/connectDB"
import { tokenVerify, verifyAdmin } from "@/lib/hooks/verifyToken/verifyToken";
import { NextResponse } from "next/server";
const db = await connectDB();
const usersCollection = db.collection('users')
export const GET = async (request) =>{
    const isAdmin = await verifyAdmin();
    // console.log(isAdmin)
    if (!isAdmin) {
        return NextResponse.json({message : "Something went wrong"}, )
    }
    try {
        const users = await usersCollection.find().toArray()
        // console.log(users)
        return NextResponse.json({users})
    } catch (error) {
        return NextResponse.json({message : "No Data Found", error})
    }
}
export const PUT = async (request) =>{
    const data = await request.json()
    const isAdmin = await verifyAdmin();
    // console.log(isAdmin)
    if (!isAdmin) {
        return NextResponse.json({message : "Something went wrong"}, )
    }
    const {email} = data
   
    delete data.email
    const updateDoc = {
        $set:{...data}
    }
    const resp = await usersCollection.updateOne({email}, updateDoc)
    console.log(resp)
    return NextResponse.json({resp})
}