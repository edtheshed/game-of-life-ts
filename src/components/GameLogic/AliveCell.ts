import {CellState} from "./CellState"
import {DeadCell} from "./DeadCell";

export class AliveCell implements CellState {

    nextState!: CellState;
    x: number;
    y: number;
    id: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.id = `${x}${y}`;
    }

    isAlive(): boolean {
        return true;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (AliveCell.isLonely(numberOfNeighbours) || AliveCell.isOvercrowded(numberOfNeighbours)) {
            this.nextState = new DeadCell(this.x, this.y);
        } else if (AliveCell.isHappyWithLife(numberOfNeighbours)) {
            this.nextState = new AliveCell(this.x, this.y);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new AliveCell(this.x, this.y);
    }

    private static isLonely(numberOfNeighbours: number): boolean {
        return numberOfNeighbours < 2;

    }

    private static isOvercrowded(numberOfNeighbours: number): boolean {
        return numberOfNeighbours > 3;

    }

    private static isHappyWithLife(numberOfNeighbours: number): boolean {
        return numberOfNeighbours === 3 || numberOfNeighbours === 2;

    }

    getId(): string {
        return this.id;
    }

    getXCoordinate(): number {
        return this.x;
    }

    getYCoordinate(): number {
        return this.y;
    }
}