import { spawn } from "child_process";

// Start server (index.js)
const server = spawn("node", ["index.js"], { stdio: "inherit" });

// After 2 seconds, start worker.js
setTimeout(() => {
    console.log("Server started. Launching worker.js...");
    const worker = spawn("node", ["worker.js"], { stdio: "inherit" });
}, 2000);
