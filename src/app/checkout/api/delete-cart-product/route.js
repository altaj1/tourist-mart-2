
import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/connectDB";
import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken";
import { ObjectId } from 'mongodb';

export const DELETE = async (request) => {
  const isVerified = await verifyUser();
  if (!isVerified) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const cartProductIdsString = searchParams.get("cartProductIds");
  
  if (!cartProductIdsString) {
    return NextResponse.json({ error: "No cart product IDs provided" }, { status: 400 });
  }

  let cartProductIds;
  try {
    cartProductIds = JSON.parse(decodeURIComponent(cartProductIdsString));
  } catch (error) {
    return NextResponse.json({ error: "Invalid cart product IDs format" }, { status: 400 });
  }

  const cartIds = cartProductIds.map(item => new ObjectId(item.cartId));

  try {
    const db = await connectDB();
    const soppingCartCollection = db.collection('soppingCart');
    
    const result = await soppingCartCollection.deleteMany({ _id: { $in: cartIds } });
    console.log(result, "Deletion result");

    if (result.deletedCount > 0) {
      return NextResponse.json({ message: 'Products deleted successfully', deletedCount: result.deletedCount }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No products matched for deletion' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error during deletion:', error);
    return NextResponse.json({ error: 'Failed to delete products' }, { status: 500 });
  }
};
