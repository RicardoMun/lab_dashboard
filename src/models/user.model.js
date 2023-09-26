import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true /* Quita espacios */
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {  
        type: String,
        default: 'user'
    },

}, {
    timestamps: true /* Crea dos campos: createdAt y updatedAt */
})

export default mongoose.model('User', UserSchema);