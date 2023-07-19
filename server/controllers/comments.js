const Post = require('../models/Posts');
const User = require('../models/User');
const Comment = require('../models/Comments');

module.exports = (app) => {
  // CREATE Comment
  app.post('/posts/:postId/comments', async (req, res) => {
    try {
      const comment = new Comment(req.body);
      comment.author = req.user._id;
      await comment.save();
      const [post] = await Promise.all([
        Post.findById(req.params.postId),
      ]);
      post.comments.unshift(comment);
      await post.save();
      res.redirect(`/posts/${req.params.postId}`);
    } catch (err) {
      console.log(err);
    }
  });
};