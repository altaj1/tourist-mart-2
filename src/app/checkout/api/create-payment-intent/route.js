import { verifyUser } from "@/lib/hooks/verifyToken/verifyToken";
import { NextResponse } from "next/server"
const stripe = require('stripe')(process.env.NEXT_PUBLIC_PAUMENT_SECRET_KEY)
export const POST = async (request, {params})=>{
   const isVeryfi = await verifyUser()
   if (!isVeryfi) {
    return  NextResponse.json({massege:"unauthorized access"})
   }
    const { searchParams } = new URL(request.url);
    const subtotal = searchParams.get('subtotal')
    const priceInCent = parseFloat(subtotal) *100
    if (!subtotal || priceInCent < 1 && priceInCent < 10000) {
        NextResponse.json({moreAmount:"Amount must be no more than 1000"})
        return}
        const { client_secret } = await stripe.paymentIntents.create({
            amount: priceInCent,
            currency: 'usd',
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            automatic_payment_methods: {
              enabled: true,
            },
          })
        return NextResponse.json({ clientSecret: client_secret })
}