import { NextResponse } from "next/server"

export const PUT = (request, {params})=>{
    console.log("this is payment history")
    return NextResponse.json({data:"data not found"})
}