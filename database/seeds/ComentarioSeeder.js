'use strict'

/*
|--------------------------------------------------------------------------
| ComentarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ComentarioSeeder {
  async run () {
    Factory.model('App/Models/Comentario').createMany(5)
  }

}

module.exports = ComentarioSeeder
