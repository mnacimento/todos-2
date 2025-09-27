const fs = require("fs");
const path = require("path");

const logRequest = (req) => {
  const now = new Date();
  const [date] = now.toISOString().split("T");

  // En Vercel usar /tmp; en local usar carpeta del proyecto
  const baseDir = process.env.VERCEL ? "/tmp" : path.join(__dirname, "logs");
  try { fs.mkdirSync(baseDir, { recursive: true }); } catch {}

  const logFile = path.join(baseDir, `${date}.log`);
  const logMessage = `[${now.toISOString()}] METHOD: ${req.method} ${req.url}\n`;

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) console.error("Error writing log: ", err);
  });
};

module.exports = logRequest;
