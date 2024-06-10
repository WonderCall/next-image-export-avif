"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRemoteImageURLs = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const urlToFilename = require("./urlToFilename");
async function getRemoteImageURLs(nextConfigFolder, folderPathForRemoteImages) {
    let remoteImageURLs = [];
    const remoteImagesFilePath = path_1.default.join(nextConfigFolder, "remoteOptimizedImages.js");
    if (fs_1.default.existsSync(remoteImagesFilePath)) {
        const remoteOptimizedImages = await require(remoteImagesFilePath);
        remoteImageURLs = remoteOptimizedImages;
    }
    // Create the filenames for the remote images
    const remoteImageFilenames = remoteImageURLs.map((url) => {
        const encodedURL = urlToFilename(url);
        const filename = path_1.default.join(folderPathForRemoteImages, encodedURL);
        return {
            basePath: folderPathForRemoteImages,
            file: encodedURL,
            dirPathWithoutBasePath: "",
            fullPath: filename,
        };
    });
    return { remoteImageFilenames, remoteImageURLs };
}
exports.getRemoteImageURLs = getRemoteImageURLs;
