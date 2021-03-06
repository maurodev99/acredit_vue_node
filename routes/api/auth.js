const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


// User Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
  const token = req.body.token;
  if (token) {
    let decoded = jwt.decode(token);
    let personummer = decoded.ssn;
    User.findOne({ personummer })
      .then(user => {
        if (!user) return res.status(400).json({ msg: 'User Does not exist' })
        jwt.sign(
          { id: user.id },
          config.get('jwtSecret'),
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                admin: user.admin,
                name: user.name,
                lastname: user.lastname,
                email: user.email
              }
            });
          }
        )
      })
  }
  else {
    const { email, password } = req.body;
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if (!user) return res.status(400).json({ msg: 'User Does not exist' });

        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 36000 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
                    admin: user.admin,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email
                  }
                });
              }
            )
          })
      })
  }  
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {    //middleware protection
  User.findById(req.user.id)
    .select('-password')      //disregard password
    .then(user => res.json(user));
});

module.exports = router;
