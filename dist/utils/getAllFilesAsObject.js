"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
module.exports = function getAllFilesAsObject(basePath, dirPath, exportFolderName, arrayOfFiles = []) {
    // check if the path is existing
    if (fs.existsSync(dirPath)) {
        let files = fs.readdirSync(dirPath);
        files.forEach(function (file) {
            if (fs.statSync(dirPath + "/" + file).isDirectory() &&
                file !== exportFolderName &&
                file !== "optimized" // default export folder name
            ) {
                arrayOfFiles = getAllFilesAsObject(basePath, dirPath + "/" + file, exportFolderName, arrayOfFiles);
            }
            else {
                const dirPathWithoutBasePath = dirPath
                    .replace(basePath, "") // remove the basePath for later path composition
                    .replace(/^(\/)/, ""); // remove the first trailing slash if there is one at the first position
                arrayOfFiles.push({ basePath, dirPathWithoutBasePath, file });
            }
        });
    }
    return arrayOfFiles;
};
