const qrNode = require("qrcode");

const generator = async (text) => {
  try {
    console.log(await qrNode.toDataURL(text));
  } catch (error) {
    console.log(error);
  }
};
generator("salom");

