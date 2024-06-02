import linkDB from "../database/db.link.js";

const postsList = () => linkDB('SELECT * FROM posts;')

const findPosts = (id) => linkDB('SELECT * FROM posts WHERE id = $1;', [id])

const addPosts = () => 
linkDB('INSERT INTO posts (id, titulo, img, descripcion, likes) values (DEFAULT, $1, $2, $3, $4) RETURNING *;', [titulo, img, descripcion, likes])

/* const updPosts = () => linkDB('SELECT * FROM posts WHERE id = $1;') 

const delPosts = () => linkDB('SELECT * FROM posts WHERE id = $1;')  */


/* const getAllPostModel = async () => {
    const AllPosts = await pool.query('SELECT * FROM posts')
    console.log(AllPosts)
    return AllPosts.rows
} */

export { getAllPostModel, postsList, findPosts, addPosts, updPosts, delPosts }