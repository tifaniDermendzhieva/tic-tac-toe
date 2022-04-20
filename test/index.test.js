const tikTakToe = require("../index.js");
const { expect } = require("chai");

describe("tiktaktoe tests", () => {
  describe("when X wins", () => {
    let winner = "X";
    it("1 row", () => {
      let game = ["X", "X", "X", "O", "O ", "X", "X", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 row", () => {
      let game = ["X", "X", "O", "X", "X", "X", " ", " ", " "];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("3 row", () => {
      let game = ["X", "X", "O", "X", "O", "X", "X", "X", "X"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 diagonal", () => {
      let game = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("1 diagonal", () => {
      let game = ["X", "O", "X", "X", "X", "O", "O", "X", "X"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("1 col", () => {
      let game = ["X", "O", "X", "X", "O", "X", "X", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 col", () => {
      let game = ["O", "X", "X", "O", "X", "X", "X", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("3 col", () => {
      let game = ["O", "X", "X", "O", "O", "X", "X", "X", "X"];

      expect(tikTakToe(game)).to.equal(winner);
    });
  });

  describe("when O wins", () => {
    let winner = "O";
    it("1 row", () => {
      let game = ["O", "O", "O", "O", "O ", "X", "X", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 row", () => {
      let game = ["X", "X", "O", "O", "O", "O", " ", " ", " "];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("3 row", () => {
      let game = ["X", "X", "O", "X", "O", "X", "O", "O", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 diagonal", () => {
      let game = ["X", "X", "O", "O", "O", "X", "O", "O", "X"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("1 diagonal", () => {
      let game = ["O", "O", "X", "X", "O", "O", "O", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("1 col", () => {
      let game = ["O", "O", "X", "O", "O", "X", "O", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("2 col", () => {
      let game = ["O", "O", "X", "O", "O", "X", "X", "O", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });

    it("3 col", () => {
      let game = ["X", "O", "O", "O", "X", "O", "X", "X", "O"];

      expect(tikTakToe(game)).to.equal(winner);
    });
  });

  it("should return false when it is tie", () => {
    let game = ["O", "X", "X", "O", "O ", "X", "X", "X", "O"];
    expect(tikTakToe(game)).to.be.false;
  });

  it("should return false when the game field is empty", () => {
    let game = [];
    expect(tikTakToe(game)).to.be.false;
  });

  it("should return false when the game field only contains empty fields", () => {
    let game = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    expect(tikTakToe(game)).to.be.false;
  });

  it("should return false when the game field less than 9 elements", () => {
    let game = [" ", " ", " ", " ", " ", " "];
    expect(tikTakToe(game)).to.be.false;
  });

  it("should return false when the game field more than 9 elements", () => {
    let game = [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ];
    expect(tikTakToe(game)).to.be.false;
  });
});
