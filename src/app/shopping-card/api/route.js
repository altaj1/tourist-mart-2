import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    const db = await connectDB();
    const productsCollection = db.collection("products")
    const soppingCartCollection = db.collection("soppingCart")
    const {searchParams} = new URL (request.url);
    const mainProductId = searchParams.get('mainProductId')
    const addEmail = searchParams.get('addEmail')
    // console.log(ObjectId.isValid(mainProductId))
    if (addEmail && mainProductId){
        const prevProduct = await productsCollection.findOne({_id:new ObjectId(String(mainProductId))});
        delete prevProduct._id;
        const respose = await soppingCartCollection.insertOne({addEmail: addEmail,mainProductId:mainProductId, ...prevProduct})
    }
   
// console.log(respose)
    const countDoc = await soppingCartCollection.countDocuments({addEmail: addEmail})
  
    return NextResponse.json({data:countDoc})
}