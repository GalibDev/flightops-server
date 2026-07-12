import {NextRequest,NextResponse} from "next/server";
export function proxy(req:NextRequest){if(!req.cookies.get("flightops_token")){const url=new URL("/login",req.url);url.searchParams.set("next",req.nextUrl.pathname);return NextResponse.redirect(url)}return NextResponse.next()}
export const config={matcher:["/dashboard/:path*","/admin/:path*","/flights/add/:path*","/flights/manage/:path*"]};
