import React from "react";
import { ImageProps, StaticImageData } from "next/legacy/image";
export interface ExportedImageProps extends Omit<ImageProps, "src" | "loader" | "quality"> {
    src: string | StaticImageData;
    basePath?: string;
}
declare function ExportedImage({ src, priority, loading, lazyRoot, lazyBoundary, className, width, height, objectFit, objectPosition, layout, onLoadingComplete, unoptimized, alt, placeholder, basePath, blurDataURL, onError, ...rest }: ExportedImageProps): React.JSX.Element;
export default ExportedImage;
