export const encodeDeck = (deck) => {
  const objJsonStr = JSON.stringify(deck);
  return Buffer.from(objJsonStr).toString("base64");
};

export const decodeDeck = (string) => {
  const stringified = Buffer.from(string, "base64");
  return JSON.parse(stringified);
};
