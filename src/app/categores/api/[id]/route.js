import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    const db =await connectDB()
    const productsCollection = db.collection("products")
    const { searchParams } = new URL(request.url);
    const categoresItem = searchParams.get("categoresItem");
    const categoresProduct = searchParams.get("categoresProduct");
    const searchText = searchParams.get("search");
    const page = searchParams.get("page");
    const spotId = params.id
              console.log( categoresItem, categoresProduct, searchText, spotId, page,"this is serch text")
   
    try {
        const query = {
            spotId : parseInt(spotId),
            item:{$regex:String(categoresItem)},
            category:{$regex: String(categoresProduct)},
            name:{ $regex: String(searchText), $options: 'i' }
        }
        if (searchText && !categoresProduct) {
            const searchData= await productsCollection.find({
              name:{ $regex: String(searchText), $options: 'i' }}).toArray()
              return NextResponse.json({date:searchData})
        }
        const respose = await productsCollection.find(query).skip(page * 12).limit(12).toArray()
       return NextResponse.json({data:respose})
    //    .skip(page * 12).limit(12)
    } catch (error) {
        NextResponse.json({data:error})
    }
 
}