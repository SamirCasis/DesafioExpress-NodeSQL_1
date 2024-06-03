import { postsList, findPosts, addPosts } from "../models/posts.dao.js"
import fs from 'fs'
import path from "path"

const goHtml = (req, res) => {
    const filePath = path.resolve(__dirname, '../../client/index.html')
    fs.exists(filePath, (exists) => {
        if (exists) {
            res.sendFile(filePath)
        } else {
            res.status(404).send('File not found')
        }
    })
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await postsList()
        res.status(200).json({ posts })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params
        const post = await findPosts(id)
        if (!post.length) {
            return res.status(404).json({ error: 'Post not found' })
        }
        res.status(200).json({ post: post[0] })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body
        const posts = await postsList()
        const postExists = posts.find((p) => p.titulo === titulo)
        
        if (postExists) {
            return res.status(409).json({ error: 'Este post ya existe' })
        }

        const newPost = await addPosts(titulo, img, descripcion, likes)
        res.status(201).json({ post: newPost })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export { goHtml, getAllPosts, getPostById, createPost }
