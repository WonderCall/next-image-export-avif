import { ImageObject } from "./ImageObject";
export declare function downloadImagesInBatches(imagesURLs: string[], imageFileNames: ImageObject[], folder: string, batchSize: number, remoteImageCacheTTL: number): Promise<void>;
