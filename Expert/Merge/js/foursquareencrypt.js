export default function fourSquareEncrypt(key1, key2, message) {
  if (
    key1 <= 25 &&
    key1 >= 0 &&
    key2 <= 25 &&
    key2 >= 0 &&
    message.length % 2 === 0
  ) {
    for (let i = 0; i < message.length; i++) {
      message = message.replace("j", "i");
      message = message.replace(" ", "");
    }

    let square = [
      [
        [
          ["a", "b", "c", "d", "e"],
          ["f", "g", "h", "i", "k"],
          ["l", "m", "n", "o", "p"],
          ["q", "r", "s", "t", "u"],
          ["v", "w", "x", "y", "z"],
        ],
        [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ],
      ],
      [
        [
          ["a", "b", "c", "d", "e"],
          ["f", "g", "h", "i", "k"],
          ["l", "m", "n", "o", "p"],
          ["q", "r", "s", "t", "u"],
          ["v", "w", "x", "y", "z"],
        ],
        [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ],
      ],
    ];

    square[0] = createGrid(square[0], key1);
    square[1] = createGrid(square[1], key2);

    let ParsedMessage = "";

    for (let i = 0; i < message.length / 2; i++) {
      let X1 = 0;
      let Y1 = 0;
      let X2 = 0;
      let Y2 = 0;

      for (let j = 0; j < square[0][0].length; j++) {
        for (let k = 0; k < square[0][0][j].length; k++) {
          if (square[0][0][j][k] === message[i * 2]) {
            X1 = k;
            Y1 = j;
          }
          if (square[0][0][j][k] === message[i * 2 + 1]) {
            X2 = k;
            Y2 = j;
          }
        }
      }

      ParsedMessage += square[0][1][X1][Y2];
      ParsedMessage += square[1][1][X2][Y1];
    }

    return ParsedMessage;
  } else {
    return "SyntaxError";
  }

  function createGrid(square, key) {
    let yMultiplier = Math.floor(key / 5);

    for (let i = 0; i < square[1].length; i++) {
      let xMultipler = Math.ceil((key / 5 - Math.floor(key / 5)) * 10);

      for (let j = 0; j < square[1][i].length; j++) {
        if (yMultiplier + i >= 5) {
          yMultiplier -= 5;
        }
        if (xMultipler + j >= 5) {
          xMultipler -= 5;
        }

        square[1][i][j] = square[0][yMultiplier + i][j + xMultipler];
      }
    }

    return square;
  }
}
