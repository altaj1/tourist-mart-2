import { connectDB } from "@/lib/connectDB"
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const PUT =async (request, {params})=>{
    const isveryfy = await  verifyUser()
    if (!isveryfy) {
        return NextResponse.json({massage:"Something Went Wrong"})
    }
    const db = await connectDB();
    const paymentsCollection = db.collection('payments');
    const ProductsCollection = db.collection('products');
   const {searchParams} = new URL(request.url);
   const mainProductIdes = searchParams.get('mainProductIdes')
   const productInfo = await request.json();
     const ids = mainProductIdes.split(",");
      const updateArray = productInfo?.productInfo.map(pd=>{
        return {
            _id:new ObjectId(pd.mainProductId), 
            sellCount:pd?.sellCount + 1 || 0,
        }
      })
     try {
        const insertRsult = await paymentsCollection.insertOne(productInfo)
        if (insertRsult?.acknowledged) {
            for (const product of updateArray) {
                const updateResult = await ProductsCollection.updateOne(
                  { _id: product._id },
                  { $set: { sellCount: product.sellCount } }
                );
              }
        }
        return NextResponse.json({data:insertRsult})
     } catch (error) {
        return NextResponse.json({data:error})
     }
    
}