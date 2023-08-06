const sharp = require('sharp');

class BlurryDetector {
    constructor(threshold = 300) {
        this.threshold = threshold;
    }

    async computeLaplacianVariance(imagePath) {
        // Define the Laplacian kernel
        const laplacianKernel = {
            width: 3,
            height: 3,
            kernel: [0, 1, 0, 1, -4, 1, 0, 1, 0]
        };

        // Convolve the image with the Laplacian kernel
        const laplacianImageData = await sharp(imagePath)
            .greyscale()
            .raw()
            .convolve(laplacianKernel)
            .toBuffer();

        // Compute the variance of the Laplacian image
        const mean = laplacianImageData.reduce((sum, value) => sum + value, 0) / laplacianImageData.length;
        const variance = laplacianImageData.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / laplacianImageData.length;
        return variance;
    }

    async isImageBlurry(imagePath) {
        const variance = await this.computeLaplacianVariance(imagePath);
        return variance < this.threshold;
    }
}

// Export the class for CommonJS
module.exports = BlurryDetector;