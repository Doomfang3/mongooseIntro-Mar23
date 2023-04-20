const express = require('express')
const app = express()

const mongoose = require('mongoose')
const User = require('./models/User.model')
const Comment = require('./models/Comment.model')
const Media = require('./models/Media.model')

app.get('/newUser', async (request, response) => {
  const payloadFromClient = {
    username: 'Eric',
    password: '1234',
    email: 'josh@josh.com',
    hobbies: ['DnD', 'Music', 'Pizza'],
  }

  try {
    const newUser = await User.create(payloadFromClient)
    response.send(newUser)
  } catch (error) {
    console.log(error)
  }
})

app.get('/users', async (request, response) => {
  try {
    // const allUsers = await User.find()
    const { username, email } = await User.findById('644102c19415900b09593cce')
    console.log(username, email)
    response.send({ username, email })
  } catch (error) {
    console.log(error)
  }
})

app.get('/updateUser', async (request, response) => {
  try {
    const allUsers = await User.findByIdAndUpdate(
      '6440fb280590ba3b128ff7a8',
      { horsesRidden: 2 },
      { new: true }
    )
    console.log(allUsers)
    response.send(allUsers)
  } catch (error) {
    console.log(error)
  }
})

app.get('/deleteUser', async (request, response) => {
  try {
    const allUsers = await User.findByIdAndDelete('6440fb280590ba3b128ff7a8')
    console.log(allUsers)
    response.send(allUsers)
  } catch (error) {
    console.log(error)
  }
})

app.get('/comments', async (request, response) => {
  const allComments = await Comment.find().populate('createdBy media')

  response.send(allComments)
})

app.get('/newComments', async (request, response) => {
  const userId = '644102c19415900b09593cce'

  const newMedia = await Media.create({ link: 'www/google.com', type: 'Image' })

  console.log(newMedia)

  const newComment = await Comment.create({
    createdBy: userId,
    content: 'Something about football',
    hasMedia: true,
    media: [newMedia._id],
  })

  response.send(newComment)
})

// const pizza = await mongoose.connect('mongodb://localhost:27017/mongooseIntro')

mongoose
  .connect('mongodb://localhost:27017/mongooseIntro')
  .then(pizza => {
    console.log(`Connected to Mongo! Database name: "${pizza.connections[0].name}"`)

    app.listen(3000, () => {
      console.log('Server running on 3000')
    })
  })
  .catch(err => console.error('Error connecting to mongo', err))
