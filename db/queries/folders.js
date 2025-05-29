import db from "#db/client";

export async function getFolders() {
    const result = await db.query('SELECT * FROM files;')
    return result
}

export async function createFolder(name) {
    const result = await db.query(
        'INSERT INTO folders (name) VALUES ($1) RETURNING *;', [name]
    )
    return result
}