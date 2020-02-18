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

  it("should have a height and width 2 more than the requested dimensions", () => {
    expect(game.height).toEqual(height + 2);
    expect(game.width).toEqual(width + 2);
  });

  it("should have a board with all cells dead", () => {
    for (var i: number = 0; i < height; i++) {
      for (var j: number = 0; j < width; j++) {
        expect(game.getCellState(i, j)).toBeFalsy();
      }
    }
  });

  describe("with one alive cell", () => {

    beforeEach(() => {
      game.setCellAlive(0, 0);
    });

    it("should be alive", () => {
      expect(game.getCellState(0, 0)).toBeTruthy();
    });

    describe("after one cycle", () => {
      it("should be dead", () => {
        game.cycle();
        expect(game.getCellState(0, 0)).toBeFalsy();
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
        expect(game.getCellState(1, 1)).toBeFalsy();
        expect(game.getCellState(1, 3)).toBeFalsy();
        expect(game.getCellState(1, 2)).toBeTruthy();
      })

      describe("after one cycle", () => {
        it("should have all of the original three remaining alive", () => {
          game.cycle();
          expect(game.getCellState(1, 1)).toBeTruthy();
          expect(game.getCellState(1, 2)).toBeTruthy();
          expect(game.getCellState(1, 3)).toBeTruthy();
        })
      })
    })
  })
});
