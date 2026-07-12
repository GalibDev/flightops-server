import {currentUser} from "@/lib/auth";import {connectDB} from "@/lib/db";import {AuditLogModel} from "@/models/AuditLog";
export async function requireAdmin(){const user=await currentUser();if(!user||user.role!=="admin")return null;await connectDB();return user}
export async function audit(actor:{id:string;name:string;email:string},action:string,resource:string,resourceId:string,details:string){await AuditLogModel.create({actorId:actor.id,actorName:actor.name,actorEmail:actor.email,action,resource,resourceId,details})}
