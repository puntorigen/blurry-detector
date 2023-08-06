#!/usr/bin/env node

const yargs = require('yargs');
const BlurryDetector = require('./index');

const argv = yargs
    .usage('Usage: $0 <imagePath> [options]')
    .command('$0 <imagePath>', 'Assess image for blurriness', (yargs) => {
        yargs.positional('imagePath', {
            describe: 'Path to the image',
            type: 'string'
        });
    })
    .option('t', {
        alias: 'threshold',
        describe: 'Threshold for blurriness',
        default: 300,
        type: 'number'
    })
    .help('h')
    .alias('h', 'help')
    .argv;

const detector = new BlurryDetector(argv.threshold);
detector.isImageBlurry(argv.imagePath).then(isBlurry => {
    if (isBlurry) {
        console.log('🔍 Given image is blurred!');
    } else {
        console.log('🔍 Given image seems focused!');
    }
});
