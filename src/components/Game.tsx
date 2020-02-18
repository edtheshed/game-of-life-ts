import { CellState } from "./CellState"
import { DeadCell } from "./DeadCell";
import { AliveCell } from "./AliveCell";

export default class Game {
  
  height: number;
  width: number;
  board: CellState[][];

  constructor(height: number, width: number) {
    this.height = height + 2;
    this.width = width + 2;
    this.board = new Array<Array<CellState>>();
    for (var y: number = 0; y < height; y++) {
      this.board[y] = [];
      for (var x: number = 0; x < width; x++) {
        this.board[y][x] = new DeadCell;
      }
    }
  }

  setCellAlive(x: number, y: number): void {
    this.board[x][y] = new AliveCell;
  }

  getCellState(x: number, y: number): boolean {
      return this.board[x][y].isAlive();
  }

  cycle(): void {
    for (var y: number = 0; y < this.height; y++) {
      for (var x: number = 0; x < this.width; x++) {

        let numberOfNeighbours = this.countNeighbours(x, y);

        if (this.board[y][x].isAlive()){

        }

        // this.board[y][x].setNextState(0);
      }
    }
  }

  private countNeighbours(x: number, y: number) {
    throw new Error("Method not implemented.");
  }
}
