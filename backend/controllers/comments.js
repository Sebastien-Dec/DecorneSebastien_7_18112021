const Comment = require('../models/Comments');

exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.comments);
    delete req.body._id;
    const comment = await Comment.create({
        ...commentObject
    });
}