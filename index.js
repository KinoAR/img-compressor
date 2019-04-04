const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

/* 
* Allows you to compress an image to a lower quality file size within the src/ folder 
* Author: Kino Rose
*/

const outDir = path.resolve("./out")
fs.readdirSync(path.resolve("src"))
.filter( filename =>  /\.jpeg|\.jpg|\.png|\.svg/g.test(filename))
.forEach( filename => {
  console.log(filename)
  sharp(path.join("./src", filename))
  .resize(860, 640)
  .jpeg({
    quality:80
  })
  .toFile(`${outDir}/${filename}-reduced.jpeg`)
  .catch(console.error);
})
