import { ImageProps, StaticImageData } from "next/image";
import React from "react";
export interface ExportedImageProps extends Omit<ImageProps, "src" | "loader" | "quality"> {
    src: string | StaticImageData;
    basePath?: string;
}
declare const ExportedImage: React.ForwardRefExoticComponent<Omit<ExportedImageProps, "ref"> & React.RefAttributes<HTMLImageElement | null>>;
export default ExportedImage;
