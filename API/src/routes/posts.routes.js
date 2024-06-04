import { Router } from 'express'
import { viewPost, createPost, viewPostId, errorAll } from '../controllers/posts.controllers.js'

const router = Router()

router.get('/posts', viewPost)
router.get('/posts/:id', viewPostId)
router.post('/posts', createPost)
router.all('*', errorAll)

export default router