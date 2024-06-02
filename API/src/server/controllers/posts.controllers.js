import { postsList, findPosts, addPosts, getAllPostModel } from "../models/posts.dao.js"

const getAllPosts = async (req, res) => {
    try {
        const posts = await postsList()
        res.status(200).json({ posts: posts })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createPost = async (req, res) => {
    try {
        const { post } = req.body
        const posts = await getAllPostModel()
        const postExists = posts.find(
            (p) => p.titulo === post.titulo)
        if (postExists) {
            return res.status(409).json({ error: 'este post ya existe' })
        }
        const newPost = await addPosts(post)
        res.status(201).json({ post: newPost })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export { getAllPosts, createPost }