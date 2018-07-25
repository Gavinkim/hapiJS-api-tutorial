'use strict';
const UserController = require('./user.controller');
const Joi = require('joi');
module.exports = [
    {
        path: '/users/signup',
        method: 'POST',
        config: {
            handler: UserController.signup,
            validate: {
                payload: Joi.object().keys({
                    username: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            },
            description: 'User can create new Account',
            tags: ['api','User'],
            notes: 'Response new created User',
            auth: false
        }
    },
    {
        path: '/users/login',
        method: 'POST',
        config: {
            handler: UserController.login,
            validate: {
                payload: Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                })
            },
            description: 'User can Login  Account',
            tags: ['api','User'],
            notes: 'Response JWT',
            auth: false
        }
    },
    {
        path: '/users/me', // my info
        method: 'GET',
        config: {
            validate: {
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },
            handler: UserController.findme,
            tags: ['api','user'],
            description: 'Find user info',
            notes: 'Response a User'
        }
    },
    {
        path: '/users/{id}', // other user info
        method: 'GET',
        config: {
            validate: {
                params: Joi.object().keys({
                    id: Joi.string().required()
                }),
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },
            handler: UserController.profile,
            tags: ['api', 'user'],
            description: 'Find User profile',
            notes: 'Response a user'
        }
    }
]
