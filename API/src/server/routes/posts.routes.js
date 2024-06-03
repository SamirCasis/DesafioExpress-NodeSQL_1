import { Router } from 'express'
import { getAllPosts, createPost, goHtml} from '../controllers/posts.controllers.js'

const router = Router()

router.get('/', goHtml)
router.get('/api/v1/posts', getAllPosts)
router.post('/api/v1/posts', createPost)


export default router