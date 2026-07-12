import {Schema,model,models} from "mongoose";
const AuditLogSchema=new Schema({actorId:String,actorName:{type:String,required:true},actorEmail:{type:String,required:true},action:{type:String,required:true},resource:{type:String,required:true},resourceId:String,details:{type:String,required:true},ipAddress:String},{timestamps:true});
export const AuditLogModel=models.AuditLog||model("AuditLog",AuditLogSchema);
