import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const UserSchemaModal = mongoose.model('user', userSchema);

export default UserSchemaModal;