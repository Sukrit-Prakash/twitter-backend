const express = require('express')

const router = express.Router()
const{liketweet,gettweet,createtweet} = require('../controllers/tweetcontroler')
const authmiddleware = require('../middleware/authmiddleware')

router.post('/',authmiddleware,createtweet)
router.get('/',gettweet)
router.post('/:id/like',authmiddleware,liketweet)

module.exports = router



