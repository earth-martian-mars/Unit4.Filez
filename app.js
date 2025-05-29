import express from "express";
const app = express();
import filesRouter from "./api/files.js"
import foldersRouter from "./api/folders.js"

// Body-parsing middleware
app.use(express.json());

app.route("/").get((req, res) => {
    res.status("Hello files!")
});

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

// Error middleware

export default app;