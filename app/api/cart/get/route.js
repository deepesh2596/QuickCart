import connectDB from "@/config/db";
import { getAuth } from ("@clerk/nextjs/server");
import User from "@/models/User";
import { NextResponse } from "next/server";



async function GET(request) {
    try {
        
        const { userId } = getAuth(request)

        await connectDB()
        const user = await User.findById(UserId)
        const { cartItems } = user
        
       return NextResponse.json({ success: true, cartItems}) 

    } catch (error) {
        return NextResponse.json({ success:true, message: error.message})
    }
}