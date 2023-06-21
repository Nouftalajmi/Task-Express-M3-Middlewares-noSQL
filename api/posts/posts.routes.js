const express = require('express');
const router = express.Router();
const uploader = require("../../middleware/uploader")
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
} = require('./posts.controllers');
router.param("postId", async (req, res, next, postId) => {
  try {
    const foundPost = await fetchPost(postId);
    if (!foundPost) return next({ status: 404, message: "post not found" })
    req.post = foundPost;
  } catch (error) {
    return (error)
  }
})

router.get('/', postsGet);
router.post('/', uploader.single("image"), postsCreate);
// after adding image in postman

router.delete('/:postId', postsDelete);

router.put('/:postId', postsUpdate);

module.exports = router;
