const Tweet = require('../models/tweet')
const User = require('../models/user')
const mongoose = require('mongoose');
exports.createtweet = async (req, res) => {
    try {
        const { content } = req.body;
        const tweet = new Tweet({ content, publisher: req.user.userId });
        await tweet.save();
        res.status(201).json({ message: 'Tweet created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create tweet' });
    }
};


exports.gettweet = async(req,res)=>{
    try {
        const tweets = await Tweet.find().populate('publisher','username').exec()
        res.json(tweets)
    }
     catch (error) {
        res.status(400).json(error)
    }
};


exports.liketweet = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id);
        if (!tweet) return res.status(400).json('Tweet NOT FOUND');

        if (tweet.likes.includes(req.user.userId)) {
            // Remove userId from likes array
            tweet.likes = tweet.likes.filter(userId => userId.toString() !== req.user.userId);
        } else {
            // Add userId to likes array
            tweet.likes.push(req.user.userId);
        }

        await tweet.save();
        res.json(tweet);
    } catch (error) {
        console.error('Error in liking post:', error);
        res.status(500).json({ message: 'Error in liking post', error: error.message });
    }
};
