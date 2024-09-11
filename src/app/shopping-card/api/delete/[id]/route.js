
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const DELETE = async (request, {params})=>{
    const db = await connectDB();
    const soppingCartCollection = db.collection("soppingCart")

    const res = await soppingCartCollection.deleteOne({_id: new ObjectId(params.id)})
    console.log(res)
    return NextResponse.json({...res})
}