import linkDB from '../database/db.link.js'

const postsList = () => linkDB('SELECT * FROM posts;')

const findPosts = (id) => linkDB('SELECT * FROM posts WHERE id = $1;', [id])

const addPosts = (titulo, url, descripcion) =>
  linkDB('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *;', [titulo, url, descripcion])

const updPosts = (id, titulo, url, descripcion, likes) =>
  linkDB('UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes = $5 WHERE id = $1 RETURNING *;', [id, titulo, url, descripcion, likes])

const updPostsLike = (id) =>
  linkDB('UPDATE posts SET likes = (likes + 1) WHERE id = $1 RETURNING *;', [id])

const delPosts = (id) => linkDB('DELETE FROM posts WHERE id = $1;', [id])

export { postsList, findPosts, addPosts, updPosts, updPostsLike, delPosts }