const mongoose = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const mediaSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Image', 'Video', 'Audio'],
    required: true,
  },
})

const Media = mongoose.model('Media', mediaSchema)

module.exports = Media
