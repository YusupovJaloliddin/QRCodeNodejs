// const qrNode = require("qrcode");

// const generator = async (text) => {
//   try {
//     console.log(await qrNode.toDataURL(text));
//   } catch (error) {
//     console.log(error);
//   }
// };
// generator("salom");
var QRCode = require("qrcode");
var canvas = document.getElementById("canvas");

QRCode.toCanvas(canvas, "sample text", function (error) {
  if (error) console.error(error);
  console.log("success!");
});
