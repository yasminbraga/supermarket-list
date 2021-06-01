import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GroceriesController {
  public async index({ view }: HttpContextContract) {
    return view.render('groceries/index')
  }
  public async create({ view }: HttpContextContract) {
    return view.render('groceries/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const { total, date } = request.all()
    console.log({ total, date })
  }
}
