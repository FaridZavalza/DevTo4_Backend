const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidatior = require('mongoose-unique-validator')
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email invalid"] 
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    }

},
{
   timestamps: true,
   statics: {
    encrypPassword: async (password) => {
        if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
           throw new Error ("password not valid") 
        }
        const salt = await bcrypt.genSalt(15)
        return await bcrypt.hash(password, salt)
    },
    comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash)
    }
   }
});
userSchema.plugin(uniqueValidatior)
const Users =  model('users', userSchema)
module.exports = Users