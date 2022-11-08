import fourSquareEncrypt from "./foursquareencrypt.js";
import fourSquareDecrypt from "./foursquaredecrypt.js";

document.getElementById("foursquarecipher").addEventListener("submit", (e) => {
  let text = document.getElementById("output");

  e.preventDefault();

  if (e.path[0][0].checked === true) {
    text.innerText = fourSquareEncrypt(
      e.path[0][2].value,
      e.path[0][3].value,
      e.path[0][4].value
    );
  } else if (e.path[0][1].checked === true) {
    text.innerText = fourSquareDecrypt(
      e.path[0][2].value,
      e.path[0][3].value,
      e.path[0][4].value
    );
  }
});
