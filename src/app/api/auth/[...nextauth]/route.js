import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { connectDB } from "@/lib/connectDB";
const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
      rolling: false, 
    }, 
    jwt: {
      async encode({ token, secret }) {
        // Encode token using jsonwebtoken
        const encodedToken = jwt.sign(token, secret);
        return encodedToken;
      },
      async decode({ token, secret }) {
        // Decode token using jsonwebtoken
        try {
          const decodedToken = jwt.verify(token, secret);
          return decodedToken;
        } catch (error) {
          return null;
        }
      }
    },
    providers: [
      CredentialsProvider({
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials) {
          const { email, password } = credentials;
          if (!email || !password) {
            return null;
          }
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          if (!currentUser) {
            return null;
          }
          const passwordMatched = bcrypt.compareSync(
            password,
            currentUser.password
          );
          if (!passwordMatched) {
            return null;
          }
          return currentUser;
        },
      }),
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      }),
   
    ],
    pages: {
      signIn: "/login",
  
    },
    callbacks: {
      async signIn({ user, account }) {
        if (account.provider === "google" || account.provider === "github" || account.provider === "facebook") {
          const { name, email, image } = user;
          const data ={
            name,
            email,
            role:"User"
          }
          try {
            const db = await connectDB();
            const userCollection = db.collection("users");
            const userExist = await userCollection.findOne({ email });
            if (!userExist) {
              const res = await userCollection.insertOne(data);
              return user;
            } else {
              return user;
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          return user;
        }
      },

      async jwt({ token, user }) {
        // Add user id to token
       
        return {...token, ...user};
      },
      async session({ session, token }) {
        // Add user id to session
        session.user = token
        return session;
      }
    
    },
  });
  
  export { handler as GET, handler as POST };