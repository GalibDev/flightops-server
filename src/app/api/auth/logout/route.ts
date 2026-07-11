import {NextResponse} from "next/server";export async function POST(){const r=NextResponse.json({success:true,message:"Signed out"});r.cookies.delete("flightops_token");return r}
