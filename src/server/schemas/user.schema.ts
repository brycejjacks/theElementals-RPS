import mongoose from "mongoose";
import type { User } from "../../shared/models/user.model";

const userSchema = new mongoose.Schema<User>({
    username:{type: String, required: true},
    password:{type: String, required: true},
})

export const UserModel = mongoose.model<User>('user', userSchema);