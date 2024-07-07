import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.'],
        minlength: 5
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password.'],
        validate: {
            validator: function (val) {
                return val === this.password;
            },
            message: 'Password and confirm password do not match.'
        }
    }
});

// Encrypt the password before saving the user
UserSchema.pre('save', async function (next) {
    // check if the passwoord is changed  then encrypt it before saving it 
    // but if not changed it will not work 
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined; // Ensure confirmPassword is not saved to the database
    next();
});

// Change _id to id
UserSchema.plugin(toJSON);

export const UserModel = model('User', UserSchema);
