import { connectDB, usersCollection } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export const POST = async (request) => {
  try {
    // Parse the incoming request's JSON body
    const newUser = await request.json();

    // Connect to the database
    const db = await connectDB();
    const usersCollection = db.collection('users');

    // Check if a user with the same email already exists
    const isExist = await usersCollection.findOne({ email: newUser.email });

    if (isExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 409 }); // 409 Conflict
    }

    // Hash the user's password
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    // Insert the new user into the database
    const resp = await usersCollection.insertOne({ ...newUser, password: hashedPassword, role:'User' });
    return NextResponse.json({ message: 'User Created' }, { status: 201 }); // 201 Created
  } catch (error) {
    
    return NextResponse.json(
      { message: 'Something Went Wrong', error: error.message },
      { status: 500 }
    );
  }
};
