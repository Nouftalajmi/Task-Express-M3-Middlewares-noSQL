const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next, postId) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`
    }
    await req.post.create(req.body);
    res.status(201).json();
  } catch (error) {
    return next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  const { postId } = req.params;
  try {

    await req.post.deleteOne();
    res.status(204).end();

  } catch (error) {
    return next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  const { postId } = req.params;
  try {
    // const foundPost = await Post.findById(postId);
    // if (foundPost) {
    await req.post.updateOne(req.body);
    res.status(204).end();
    // } else {
    res.status(404).json({ message: "post not found" });

  } catch (error) {
    return next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    await req.post.find();
    res.json(posts);
  } catch (error) {
    return next(error);
  }
};

exports.getPostById = (req, res, next) => {
  try {
    return res.status().json(req.post)
  } catch (error) {
    return next(error)
  }

}