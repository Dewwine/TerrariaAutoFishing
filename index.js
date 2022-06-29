import { detectPosition, clickMouse } from './src/robotUtils.js';
import { takeScreen } from './src/takeScreen.js';
import { parseImage } from './src/parseImage.js';
import { recognizeText } from './src/recognizeText.js';
import { checkTerraria } from './src/checkTerraria.js';

const example = ['crate'];

const main = async () => {
  const isTerraria = await checkTerraria();

  if (isTerraria) {
    // const filePath = `${process.cwd()}/downloads/shot.png`;

    const position = detectPosition();
    const screenshotBuffer = await takeScreen(position);

    const recognitionConfig = {
      lang: language,
      oem: 3,
      psm: 12,
    };

    const text = await parseImage(screenshotBuffer, recognitionConfig);

    const similarity = await recognizeText(text, example);

    if (similarity > 40) {
      console.log('recognized');
      clickMouse();
    }
  } else {
    console.log('Please, start Terraria!');
    return;
  }
};

setInterval(async () => await main(), 100);
// cron.schedule('* * * * * * *', async () => {
//   await main();
// });

// main();
