const express = require('express')

const router = express.Router()

const User = require('../models/User')

// REGISTER

router.post('/register', async (req, res) => {

  try {

    const {

      name,
      email,
      password,
      isAdmin

    } = req.body

    const userExists =
      await User.findOne({ email })

    if (userExists) {

      return res.status(400).json({

        message: 'User already exists'

      })

    }

    const user =
      await User.create({

        name,
        email,
        password,
        isAdmin: isAdmin || false

      })

    res.status(201).json(user)

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

})

// LOGIN

router.post('/login', async (req, res) => {

  try {

    const {

      email,
      password

    } = req.body

    const user =
      await User.findOne({ email })

    if (

      user &&
      user.password === password

    ) {

      res.json(user)

    }

    else {

      res.status(401).json({

        message: 'Invalid Credentials'

      })

    }

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

})

// GET ALL USERS

router.get('/users', async (req, res) => {

  try {

    const users =
      await User.find()

    res.json(users)

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    })

  }

})

module.exports = router