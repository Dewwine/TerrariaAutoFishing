const parseImage = async (screenshotBuffer, config) => {
  await new Promise((resolve, reject) => {
    exec(
      `tesseract ${filePath} ${process.cwd()}/downloads/temp -l ${config.lang} --psm ${
        config.psm
      } --oem ${config.oem}`,
      () => {
        resolve();
      },
    );
  });

  return new Promise((resolve, reject) => {
    let res = '';
    fs.createReadStream('downloads/temp.txt', 'utf-8')
      .on('data', (data) => {
        res += data;
      })
      .on('error', (error) => {
        reject(error);
      })
      .on('close', () => {
        resolve(res);
        fs.truncate('downloads/temp.txt', 0, () => console.log('done'));
      });
  });
};

export { parseImage };
