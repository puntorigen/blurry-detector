# blurry-detector 📸

A user-friendly Node.js utility to detect blurriness in images using the Laplacian variance method. Works as a CLI and as class.

[![npm version](https://badge.fury.io/js/blurry-detector.svg)](https://www.npmjs.com/package/blurry-detector)

## Introduction

Ever had that perfect image ruined by a slight blur? `blurry-detector` is here to the rescue! Using the Laplacian variance method, this package provides an intuitive way to assess the sharpness of your images.

## Installation

You can easily install `blurry-detector` using npm:

```bash
npm i -g blurry-detector
```

## Usage

First, import the 'BlurryDetector' class:
```javascript
const BlurryDetector = require('blurry-detector');
```

You can then instantiate the detector and check an image:
```javascript
const detector = new BlurryDetector();

detector.isImageBlurry('path-to-your-image.jpg').then(isBlurry => {
    if (isBlurry) {
        console.log('The image is blurred!');
    } else {
        console.log('The image is sharp!');
    }
});
```

## Customization

By default, the blurriness threshold is set to 300. If you wish to use a different threshold, simply pass it when instantiating the detector:

```javascript
const detector = new BlurryDetector(250); // using a custom threshold
```

## CLI Usage

The package also comes with a handy CLI tool:    
```bash
blurry-detector path-to-your-image.jpg
```

## Contribution
Your contributions and suggestions are heartily ♡ welcome. (✿◠‿◠)