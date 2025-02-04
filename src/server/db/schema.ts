import { int, text, singlestoreTable } from "drizzle-orm/singlestore-core";

// eslint-disable-next-line
export const users = singlestoreTable("users_table", {
  // eslint-disable-next-line
  id: int("id").primaryKey().autoincrement(),
  // eslint-disable-next-line
  name: text("name"),
  // eslint-disable-next-line
  age: int("age"),
});
