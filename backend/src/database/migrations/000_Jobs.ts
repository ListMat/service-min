import Knex from "knex";

export async function up(knex: Knex) {
  knex.schema.createTable("Jobs", (table) => {
    table.increments("id").primary();
    table.string("office").notNullable();
    table.string("description").notNullable();
    table.decimal("vacancy").notNullable();
    table.string("data").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("Jobs");
}
