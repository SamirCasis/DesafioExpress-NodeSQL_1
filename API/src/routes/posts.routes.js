import { Router } from 'express'
import { viewPost, createPost, viewPostId, delPostsid, updPostsId, updPostsIdLike, errorAll } from '../controllers/posts.controllers.js'

const router = Router()

router.get('/posts', viewPost)
router.get('/posts/:id', viewPostId)
router.post('/posts', createPost)
router.put('/posts/:id', updPostsId)
router.put('/posts/like/:id', updPostsIdLike)
router.delete('/posts/:id', delPostsid)
router.all('*', errorAll)

export default router