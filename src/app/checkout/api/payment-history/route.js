import { connectDB } from "@/lib/connectDB"
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken"
import { NextResponse } from "next/server"

export const PUT =async (request, {params})=>{
    const isveryfy = await  verifyUser()
    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    const db = await connectDB();
    const paymentsColection = db.collection('payments');
   const {searchParams} = new URL(request.url);
   const mainProductIdes = searchParams.get('mainProductIdes')
   const productInfo = await request.json();
    console.log("this is payment history", mainProductIdes, productInfo)
     const ids = mainProductIdes.split("%2C");
console.log( ids,"this is ides")
    return NextResponse.json({data:"data not found"})
}