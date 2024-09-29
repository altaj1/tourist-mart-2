import { connectDB } from "@/lib/connectDB";
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken";
import { ObjectId } from "mongodb";

const { NextResponse } = require("next/server")

export const GET =async (request, {params})=>{
    const isveryfy = await  verifyUser()
    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    const db = await connectDB();
    const paymentsCollection = db.collection('payments');
    try {
        const result = await paymentsCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data:result})
    } catch (error) {
        return NextResponse.json(error)
    }
}


 export const PUT =async (request, {params})=>{
    const isveryfy = await  verifyUser()
    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    const db = await connectDB();
    const paymentsCollection = db.collection('payments');
    const data =await request.json()
    try {
        const result = await paymentsCollection.updateOne({_id: new ObjectId(params.id)},{$set:{status :data?.cancelled}} )
        return NextResponse.json({data:result})
    } catch (error) {
        return NextResponse.json(error)
    }
 }