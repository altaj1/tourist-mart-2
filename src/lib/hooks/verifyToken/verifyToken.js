import { cookies } from 'next/headers'
import jwt from "jsonwebtoken"
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/connectDB'
const db = await connectDB();
const usersCollection = db.collection("users")
 const tokenVerify =async (req) =>{
    const cookieStore = cookies()
    // const theme =  cookieStore.get('next-auth.session-token')
    console.log(theme,"this is thim")
    if (!theme) {
        return NextResponse.json({ statusText: "Something Went Wrong" }, {status:401});
      }
      try {
        const decoded = jwt.verify(theme.value, process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET);
        // console.log(decoded)
    return decoded; 
      } catch (err) {
        console.error(err);
        return NextResponse.json({ statusText: "Something Went Wrong" }, { status: 401 });
      }
}

export const verifyAdmin = async ()=>{
   const {email} = await tokenVerify()
    try {
        const resutl = await usersCollection.findOne({email})
        // console.log(resutl)
        if (resutl?.role === 'Admin') {
            return true
        }else{
            return NextResponse.json({ statusText: "Something Went Wrong" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ statusText: "Something Went Wrong" }, { status: 401 });
    }
    // console.log(email, "this is isveryfy")
}
export const verifyAgent = async ()=>{
   const {email} = await tokenVerify()
    try {
        const resutl = await usersCollection.findOne({email})
        console.log(resutl)
        if (resutl?.role === "Agent") {
            return true
        }else{
            return NextResponse.json({ statusText: "Something Went Wrong" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ statusText: "Something Went Wrong" }, { status: 401 });
    }
    // console.log(email, "this is isveryfy")
}


