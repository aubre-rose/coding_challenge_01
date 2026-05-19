// import the express application and type definition
import express, { Express } from "express";

// initialize the express application
const app: Express = express();

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

/** Health check endpoint */
app.get("/api/v1/health", (req, res) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(), 
        version: "1.0.0",
    };

    res.json(healthData);
});

/** Players endpoint - retrieve player data */
app.get("/api/v1/players", (req, res) => {
    const players = Players();
    res.json({
        count: players.length.
        players
    });
});

/** Get player id */
app.get("/api/v1/players/:id", (req, res) => {
    const player = Players();
    if(!player) return res.status(404).json({
        message: "cant find player"});
    res.json({player)
    });


    

// export app and server for testing
export default app;