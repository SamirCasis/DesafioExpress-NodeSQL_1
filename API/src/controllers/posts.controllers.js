import { postsList, findPosts, addPosts, updPosts, delPosts } from "../models/posts.dao.js"

const viewPost = async (req, res) => {
    try {
        const posts = await postsList()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: 'error al obtener posts' })
    }
}

const createPost = async (req, res) => {
    const { titulo, url, descripcion } = req.body
    try {
        const posts = await postsList()
        const checkPost = posts.find((p) => p.titulo === titulo)
        if (checkPost) {
            return res.status(409).json({ error: 'Post Duplicado' })
        }
        const postCreated = await addPosts(titulo, url, descripcion)
        res.status(201).json({ post: postCreated })
    } catch (error) {
        res.status(500).json({ message: 'error de servidor' })
    }
}

const viewPostId = async (req, res) => {
    try {
        const { id } = req.params
        const post = await findPosts(id)
        if (!post || post.length === 0) {
            return res.status(404).json({ message: 'ID no se encuentra' })
        }
        res.status(200).json({ post: post[0] })
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener información' })
    }
}

const updPostsId = async (req, res) => {
    try {
        const { id, titulo, url, descripcion, likes } = req.body
        const post = await updPosts(id, titulo, url, descripcion, likes)
        res.status(200).json({ post: post[0] })
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar información' })
    }
}

const delPostsid = async (req, res) => {
    try {
        const { id } = req.params
        await delPosts(id)
        res.status(200).json({ post: id })
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener información' })
    }
}

const errorAll = (_, res) => {
    res.status(404).json({ message: 'Ruta incorrecta' })
}

export { viewPost, viewPostId, createPost, delPostsid, updPostsId, errorAll }
