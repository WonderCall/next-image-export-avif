module.exports = {
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 777, 828, 1080, 1200, 1920, 2048, 3840],
  },
  output: "export",
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/img",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_exportFolderName: "img/optimized",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInAVIF: "true",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};
