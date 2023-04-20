const mongoose = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  hasMedia: {
    type: Boolean,
    default: false,
  },
  media: {
    type: [mongoose.Types.ObjectId],
    ref: 'Media',
  },
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
