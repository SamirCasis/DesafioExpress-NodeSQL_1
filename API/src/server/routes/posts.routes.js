import { Router } from 'express'
import { getAllPost } from '../controllers/posts.controllers.js'

const router = Router()

router.get('/', getAllPost)
router.get('/posts', getAllPost)
router.post('/', () => {})


export default router