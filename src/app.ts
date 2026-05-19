// import the express application and type definition
import express, { Express } from "express";

// initialize the express application
const app: Express = express();


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
    const players: players = {
        id: 1,
        name: ShadowStrike,
        wins: 15,
        losses: 5,
        totalScore: 28500
    };


// export app and server for testing
export default app;