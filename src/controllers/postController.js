const Posts = require('../models/posts')
module.exports = {
    get: async (req, res) => {
        let posts = await Posts.find()
        res.status(200).send({ msg: "Success", data: posts})
    },
    getById: async (req,res) => {
        let {id} = req.params
        let post = await Posts.findById(id)
        res.status(200).send({msg: "Success", data: post})
    },
    post: async (req, res, next) => {
        try{
        let newPost = await Posts.create(req.body)
        if (!newPost) {
            res.status(502).send({msg: "Post not created", err: newPost})
        }
        await newPost.save()

        res.status(201).send({msg: "Post created", data: newPost})
    } catch (error) {
        next(error, req, res)
    }
    },
    put: async (req, res) => {
        const {id} = req.params;
        const infoToUpdate = req.body
        let updatePost = await Posts.findByIdAndUpdate(id, infoToUpdate, {new:true})
        if (!updatePost) {
            res.status(502).send({msg: "Post not updated", err: updatePost})
        }
        res.status(201).send({msg: "Post updated", data: updatePost})
    },
    delete: async (req, res) => {
        const {id} = req.params;
        let deletePost = await Posts.deleteOne({_id:id})
        if (!deletePost) {
            res.status(502).send({msg: "Post not deleted", err: deletePost})
        }
        res.status(201).send({msg: "Post deleted"})
    }
}