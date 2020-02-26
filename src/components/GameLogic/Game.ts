import {CellState} from "./CellState";
import {DeadCell} from "./DeadCell";
import {AliveCell} from "./AliveCell";

export default class Game {
    height: number;
    width: number;
    board: CellState[][];

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
        this.board = new Array<Array<CellState>>();

        for (let x: number = 0; x < width; x++) {
            this.board[x] = [];
            for (let y: number = 0; y < height; y++) {
                this.board[x][y] = new DeadCell(x, y);
            }
        }
    }

    setCellAlive(x: number, y: number): void {
        this.board[x][y] = new AliveCell(x, y);
    }

    isCellAlive(x: number, y: number): boolean {
        return this.board[x][y].isAlive();
    }

    cycle(): void {
        for (let y: number = 0; y < this.height; y++) {
            for (let x: number = 0; x < this.width; x++) {
                let numberOfNeighbours = this.countNeighbours(x, y);

                if (this.board[x][y].isAlive() || numberOfNeighbours === 3) {
                    this.board[x][y].setNextCellState(numberOfNeighbours);
                }
            }
        }

        for (let y: number = 0; y < this.height; y++) {
            for (let x: number = 0; x < this.width; x++) {
                this.board[x][y] = this.board[x][y].getNextCellState();
            }
        }
    }

    private countNeighbours(x: number, y: number) {
        return (
            this.countRowNeighbours(x, y) +
            this.countColumnNeighbours(x, y) +
            this.countDiagonalNeighbours(x, y)
        );
    }

    private countRowNeighbours(x: number, y: number): number {
        let neighbours = 0;
        if (x !== 0) {
            if (this.board[x - 1][y].isAlive()) neighbours++;
        }
        if (x !== this.board.length - 1) {
            if (this.board[x + 1][y].isAlive()) neighbours++;
        }
        return neighbours;
    }

    private countColumnNeighbours(x: number, y: number): number {
        let neighbours = 0;
        if (y !== 0) {
            if (this.board[x][y - 1].isAlive()) neighbours++;
        }
        if (y !== this.board[x].length - 1) {
            if (this.board[x][y + 1].isAlive()) neighbours++;
        }
        return neighbours;
    }

    private countDiagonalNeighbours(x: number, y: number): number {
        let neighbours = 0;
        if (x !== 0 && y !== 0) {
            if (this.board[x - 1][y - 1].isAlive()) neighbours++;
        }
        if (x !== this.board.length - 1 && y !== this.board[x].length - 1) {
            if (this.board[x + 1][y + 1].isAlive()) neighbours++;
        }
        if (x !== this.board.length - 1 && y !== 0) {
            if (this.board[x + 1][y - 1].isAlive()) neighbours++;
        }
        if (x !== 0 && y !== this.board[x].length - 1) {
            if (this.board[x - 1][y + 1].isAlive()) neighbours++;
        }
        return neighbours;
    }
}
