export declare function getRemoteImageURLs(nextConfigFolder: string, folderPathForRemoteImages: string): Promise<{
    remoteImageFilenames: {
        basePath: string;
        file: any;
        dirPathWithoutBasePath: string;
        fullPath: string;
    }[];
    remoteImageURLs: string[];
}>;
