const Post = require("../models/post");

exports.getPosts = (req, res) => {
    const posts = Post.find()
    .select("_id title body") // select only _id, title, and body from the json response
    .then((posts) => {
        res.status(200).json({posts}); // status 200 is given by default from Postman | {posts: posts} = {posts}
    })
    .catch(err => console.log(err))
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
        res.json({
            post: result
        })
    });
};