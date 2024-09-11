import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (reqest, {params})=>{
    const db = await connectDB();
    const productsCollection = await db.collection("products")
    try {
        const resp = await productsCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data:resp})
    } catch (error) {
        return NextResponse.json({error})
    }
}