const express = require("express");
const createTemplate = require("./create-template.jsx");

const app = express();
const port = 8000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust this based on your requirements
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.post("/api/stops", async (req, res) => {
    try {
        
        const result = await createTemplate(req.body);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=export.pdf");
        result.pipe(res);
    } catch (error) {
        console.error("Error generating and sending PDF:", error);
        res.status(500).send("Error generating and sending PDF");
    }
});

app.listen(port, () => {
    console.log(`The sample PDF app is running on port ${port}.`);
});