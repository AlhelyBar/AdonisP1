'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
    return {
        username: faker.username(),
        email: faker.email(),
        password: faker.password(),
        edad: Math.floor(Math.random()*40)+15
    }
})

Factory.blueprint('App/Models/Comentario', (faker) => {
    return{
        user_id: Math.floor(Math.random()*10),
        titulo: faker.word(),
        texto: faker.word()
    }
})
