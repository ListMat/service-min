import Knex from "knex";

export async function up(knex: Knex) {
  knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.decimal("huc").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
