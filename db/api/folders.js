import express from "express";
import client from "../client.js"
import folders, { getFolders } from "../queries/folders.js"


const router = express.Router();

// Sends array of all folders
router.get("/folders", async (req, res) => {
    const folders = await getFolders()
    res.send(folders)
});

router.get("/folders/:id", async (req, res) => {
    const folder_id = parseInt(req.params.id)
    try {
        const folderResult = await client.query(`SELECT fo.id, fo.name, json_agg(f) AS files
            FROM folders fo
            LEFT JOIN files f ON f.folder_id = fo.id
            WHERE fo.id = $1
            GROUP BY fo.id
        `, [folder_id]);

        if (folderResult.rows.length === 0) {
            return res.status(404).json({ error: 'Folder not found' });
        }

        res.json(folderResult.rows[0]);
    } catch (error) {
        console.error('Error fetching folder:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
