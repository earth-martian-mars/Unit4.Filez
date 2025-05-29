import express from "express";
import client from "../client.js"
import files, { getFiles } from "../queries/files.js"

const router = express.Router();

// Sends array of all files
router.get("/files", async (req, res) => {
    const files = await getFiles()
    res.send(files)
});

export default router;