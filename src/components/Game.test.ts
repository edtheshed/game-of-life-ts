import Game from "./Game";

describe("a game", () => {
  let height: number;
  let width: number;
  let game: Game;

  beforeEach(() => {
    height = 15;
    width = 10;
    game = new Game(height, width);
  });

  it("should have a height and width equal to the requested dimensions", () => {
    expect(game.height).toEqual(height);
    expect(game.width).toEqual(width);
  });

  it("should have a board with all cells dead", () => {
    for (var i: number = 0; i < height; i++) {
      for (var j: number = 0; j < width; j++) {
        expect(game.isCellAlive(i, j)).toBeFalsy();
      }
    }
  });

  describe("with one alive cell", () => {

    beforeEach(() => {
      game.setCellAlive(2, 2);
    });

    it("should be alive", () => {
      expect(game.isCellAlive(2, 2)).toBeTruthy();
    });

    describe("after one cycle", () => {
      it("should be dead", () => {
        game.cycle();
        expect(game.isCellAlive(2, 2)).toBeFalsy();
      });
    });
  });

  describe("with three alive cells next to each other", () => {

    beforeEach(() => {
      game.setCellAlive(1, 1);
      game.setCellAlive(1, 2);
      game.setCellAlive(1, 3);
    });

    describe("after one cycle", () => {
      it("should have one of the original three remaining alive", () => {
        game.cycle();
        expect(game.isCellAlive(1, 1)).toBeFalsy();
        expect(game.isCellAlive(1, 3)).toBeFalsy();
        expect(game.isCellAlive(1, 2)).toBeTruthy();
      })

      describe("after one cycle", () => {
        it("should have all of the original three remaining alive", () => {
          game.cycle();
          expect(game.isCellAlive(1, 1)).toBeTruthy();
          expect(game.isCellAlive(1, 2)).toBeTruthy();
          expect(game.isCellAlive(1, 3)).toBeTruthy();
        })
      })
    })
  })
});
