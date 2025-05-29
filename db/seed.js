import db from "./client.js";
import { createFile } from "./queries/files.js";
import { createFolder } from "./queries/folders.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createFolder("Assets")
  await createFolder("Scripts")
  await createFolder("Scenes")

  await createFile("Texture.png", 1000, 1)
  await createFile("SFX.wav", 1000, 1)
  await createFile("Player.gd", 1000, 2)
  await createFile("Main.tscn", 1000, 3)
  await createFile("Keypad.tscn", 1000, 3)
}