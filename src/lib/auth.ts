import {SignJWT,jwtVerify} from "jose";
import {cookies} from "next/headers";
import type {User} from "@/types";
import {Types} from "mongoose";import {connectDB} from "@/lib/db";import {UserModel} from "@/models/User";
const secret=new TextEncoder().encode(process.env.JWT_SECRET||"flightops-local-development-secret");
export async function signToken(user:User){return new SignJWT({...user}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(secret)}
export async function currentUser(){const token=(await cookies()).get("flightops_token")?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,secret);const user=payload as unknown as User;if(Types.ObjectId.isValid(user.id)&&await connectDB()){const live=await UserModel.findById(user.id).select("name email role isBlocked").lean();if(!live||live.isBlocked)return null;return {id:String(live._id),name:live.name,email:live.email,role:live.role,isBlocked:live.isBlocked} as User}return user}catch{return null}}
