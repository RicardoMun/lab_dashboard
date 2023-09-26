import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
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

})

export default mongoose.model('User', UserSchema);