import db from "#db/client";

export async function getFiles() {
    const result = await db.query('SELECT * FROM files;')
    return result
}

export async function createFile(name, size, folder_id) {
    const result = await db.query(
        'INSERT INTO files (name, size, folder_id) VALUES ($1, $2, $3) RETURNING *;', [name, size, folder_id]
    )
    return result
}