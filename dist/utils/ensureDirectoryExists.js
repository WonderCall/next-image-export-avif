"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function ensureDirectoryExists(filePath) {
    const dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
        return true;
    }
    ensureDirectoryExists(dirName);
    fs.mkdirSync(dirName);
}
module.exports = ensureDirectoryExists;
