import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("active", (table) => {
    table.increments("id").primary();

    table
      .integer("Jobs_id")
      .notNullable()
      .references("id")
      .inTable("Jobs")
      .onUpdate("CASCADE"); // FAZ O UPDATE DO ("ID") DO USUÁRIO DE FORMA CASCADA

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("active");
}
