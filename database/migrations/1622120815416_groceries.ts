import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Groceries extends BaseSchema {
  protected tableName = 'groceries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('date')
      table.decimal('price')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
