const Users = require('../models/posts')
module.exports = {
    get: async (req, res) => {
        let users = await Users.find()
        res.status(200).send({ msg: "Success", data: users})
    },
    getById: async (req,res) => {
        let id = req.params.id
        let user = await Users.findOne({_id: id})
        //let user = await Users.findById(id)
        //let user = await Users.findOne({first_name: id})
        res.status(200).send({msg: "Success", data: user})
    },
    post: async (req, res, next) => {
        try{
        req.body.password = await Users.encrypPassword(req.body.password)
        let user = await Users.create(req.body)
        if (!user) {
            res.status(502).send({msg: "Post not created", err: user})
        }
        await user.save()

        res.status(201).send({msg: "Post created", data: user})
    } catch (error) {
        next(error, req, res)
    }
    },
    login: async (req, res) => {
        const {email, password} = req.body
        // const reqUser = req.user
        // if (req.params.id != reqUser._id){

        // }
        let user = await Users.findOne({email: email})
        if (!user) {
            return res.send(404).send({msg: "User not found"})
        }
        let validPass = await Users.comparePassword(password, user.password)
        if (!validPass) {
            return res.status(404).send({msg: "Incorrect password"})
        }
        return res.status(200).send({msg: "Success", data: user})
    },
    put: async (req, res) => {
        const {userId} = req.params;
        const infoToUpdate = req.body
        let user = await Users.updateOne(userId, infoToUpdate)
        if (!user) {
            res.status(502).send({msg: "User not updated", err: user})
        }
        // await user.save()

        res.status(201).send({msg: "User updated", data: user})
    },
    delete: async (req, res) => {
        const {userId} = req.params;
        let user = await Users.deleteOne(userId)
        if (!user) {
            res.status(502).send({msg: "User not deleted", err: user})
        }
        // await user.save()

        res.status(201).send({msg: "User deleted", data: user})
    }
}