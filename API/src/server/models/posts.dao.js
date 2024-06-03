import linkDB from '../database/db.link.js'

const postsList = () => linkDB('SELECT * FROM posts;')

const findPosts = (id) => linkDB('SELECT * FROM posts WHERE id = $1;', [id])

const addPosts = (titulo, img, descripcion, likes) => 
  linkDB('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *;', [titulo, img, descripcion, likes])

const updPosts = (id, titulo, img, descripcion, likes) => 
  linkDB('UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *;', [titulo, img, descripcion, likes, id])

const delPosts = (id) => linkDB('DELETE FROM posts WHERE id = $1 RETURNING *;', [id])

export { postsList, findPosts, addPosts, updPosts, delPosts }