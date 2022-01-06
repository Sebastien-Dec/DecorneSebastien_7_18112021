const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Creating a user
exports.signup = (req, res, next) => {
    // Password Hash
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: hash,
                type: req.body.type, 
            };
            User.create(user)
                .then(() => res.status(201).json({ message: 'Utilisateur créé !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// User identification
exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email }})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error : 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error : 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        type: user.type,
                        // Verification of the authorization token
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });

                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//call all users
exports.getAllUsers = (req, res, next) => {
    User.findAll()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json ({ error }));
} 

//call user who post publication
exports.getUserOfPublication = (req, res, next) => {
    User.findOne({ _id: publications.users-id })
    .then(username => {
        username = user.username
    })
    .catch(error => json({ error}));
}