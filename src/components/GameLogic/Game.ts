import {CellState} from "./CellState";
import {DeadCell} from "./DeadCell";
import {AliveCell} from "./AliveCell";
import {Coordinate} from "./Coordinate";

export default class Game {
    height: number;
    width: number;
    board: CellState[][];
    liveCells: Coordinate[];
    modifiedCells: Coordinate[];

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;
        this.board = new Array<Array<CellState>>();
        this.liveCells = new Array<Coordinate>();
        this.modifiedCells = new Array<Coordinate>();


        for (let x: number = 0; x < width; x++) {
            this.board[x] = [];
            for (let y: number = 0; y < height; y++) {
                this.board[x][y] = new DeadCell(new Coordinate(x, y));
            }
        }
    }

    setCellAlive(x: number, y: number): void {
        this.board[x][y] = new AliveCell(new Coordinate(x, y));
        this.liveCells.push(new Coordinate(x, y));
    }

    isCellAlive(x: number, y: number): boolean {
        return this.board[x][y].isAlive();
    }

    cycle(): void {
        let liveCellNeighboursCoords: { key: string, coordinate: Coordinate }[] = [];

        this.liveCells.forEach(liveCell => {
            let liveCellNeighbours = liveCell.getNeighbours();
            liveCellNeighbours.forEach(cell => {
                if (liveCellNeighboursCoords.filter(f => f.key === cell.getId()).length === 0) {
                    if (this.isInBounds(cell.x, cell.y)) {
                        liveCellNeighboursCoords.push({key: cell.getId(), coordinate: cell})
                    }
                }
            });
            this.calculateNextCell(this.board[liveCell.x][liveCell.y],
                this.countAliveNeighbours(liveCell.x, liveCell.y));
            this.modifiedCells.push(new Coordinate(liveCell.x,liveCell.y));
        });

        liveCellNeighboursCoords.forEach(cell => {
            let numberOfAliveNeighbours = this.countAliveNeighbours(cell.coordinate.x, cell.coordinate.y);
            this.calculateNextCell(this.board[cell.coordinate.x][cell.coordinate.y], numberOfAliveNeighbours);
        });

        let newLiveCells: Coordinate[] = [];

        this.modifiedCells.forEach(mod => {
            let newCell: CellState = this.board[mod.x][mod.y].getNextCellState();
            this.board[mod.x][mod.y] = newCell;
            if (newCell.isAlive()) {
                newLiveCells.push(mod);
            }
        });

        this.modifiedCells = [];
        this.liveCells = newLiveCells;
    }

    private calculateNextCell(cell: CellState, numberOfNeighbours: number) {
        if (cell.isAlive() || numberOfNeighbours === 3) {
            cell.setNextCellState(numberOfNeighbours);
            this.modifiedCells.push(cell.getCoordinate());
        }
    }

    private countAliveNeighbours(x: number, y: number) {
        return (
            this.countAliveRowNeighbours(x, y) +
            this.countAliveColumnNeighbours(x, y) +
            this.countAliveDiagonalNeighbours(x, y)
        );
    }

    private countAliveRowNeighbours(x: number, y: number): number {
        let neighbours = 0;
        if (x !== 0) {
            if (this.board[x - 1][y].isAlive()) neighbours++;
        }
        if (x !== this.board.length - 1) {
            if (this.board[x + 1][y].isAlive()) neighbours++;
        }
        return neighbours;
    }

    private countAliveColumnNeighbours(x: number, y: number): number {
        let neighbours = 0;
        if (y !== 0) {
            if (this.board[x][y - 1].isAlive()) neighbours++;
        }
        if (y !== this.board[x].length - 1) {
            if (this.board[x][y + 1].isAlive()) neighbours++;
        }
        return neighbours;
    }

    private countAliveDiagonalNeighbours(x: number, y: number): number {
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

    private isInBounds(x: number, y: number): boolean {
        return (x > -1 && x < this.board.length && y > -1 && y < this.board[x].length)
    }
}
