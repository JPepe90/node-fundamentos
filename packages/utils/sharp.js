const sharp = require('sharp');

sharp('./dragon.png')
  .resize(80)
  .grayscale()
  .toFile('resized.png');