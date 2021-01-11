'use strict'

const User = use ('App/Models/User')

class UserController {
    async index ({response}){
        const user = await User.all()
        return ('User.index',{user: user.toJSON()})
    }

    async registro ({request, response}){
        const username = request.input('username')
        const email = request.input('email')
        const password = request.input('password')
        const edad = request.input('edad')

        const user = new User()
        user.username = username
        user.email = email
        user.password = password
        user.edad = edad

        await user.save()
        return response.json(user)
    }

    async borrar ({params, request, response}){
        await User.find(params.email).Delete()
        return response.json({message:'Usuario Eliminado'})
    }

    async actualizar ({params, request, response}){
        const username = request.input('username')
        const email = request.input('email')
        const password = request.input('password')
        const edad = request.input('edad')

        let user = await User.find(params.email)

        const user = new User()
        user.username = username
        user.email = email
        user.password = password
        user.edad = edad

        await user.save()
        return response.json(user)
    }
}


module.exports = UserController
