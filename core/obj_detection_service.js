
const sharp = require("sharp");

async function prepare_input(buf) {
    const img = sharp(buf);
    const md = await img.metadata();
    const [img_width,img_height] = [md.width, md.height];
    const pixels = await img.removeAlpha()
        .resize({width:640,height:640,fit:'fill'})
        .raw()
        .toBuffer();
}