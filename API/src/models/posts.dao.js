import linkDB from '../database/db.link.js'

const postsList = () => linkDB('SELECT * FROM posts;')

const findPosts = (id) => linkDB('SELECT * FROM posts WHERE id = $1;', [id])

const addPosts = (titulo, url, descripcion) =>
  linkDB('INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *;', [titulo, url, descripcion])

export { postsList, findPosts, addPosts }