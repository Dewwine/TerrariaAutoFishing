import * as fuzz from 'fuzzball';

const recognizeText = async (text, example) => {
  for (const element of example) {
    return fuzz.ratio(text, element);
  }
};

export { recognizeText };
