// import * as fs from 'fs';
import { Screenshot, ImageFormat } from 'win-screenshot';

const takeScreen = async (coords, filePath) => {
  // if (!fs.existsSync('downloads')) {
  //   fs.mkdirSync('downloads');
  // }

  const res = await Screenshot.captureByCoordinates({
    coords,
    imageFormat: ImageFormat.PNG,
  });

  // fs.writeFileSync(filePath, Buffer.from(res.imageBuffer, 'base64'));
  return Buffer.from(res.imageBuffer, 'base64');
};

export { takeScreen };
