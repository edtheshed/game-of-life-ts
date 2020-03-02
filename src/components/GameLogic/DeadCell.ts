import {CellState} from "./CellState"
import {AliveCell} from "./AliveCell";

export class DeadCell implements CellState {

    nextState!: CellState;

    x: number;
    y: number;
    id: string;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.id = `${x}:${y}`;
    }

    isAlive(): boolean {
        return false;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (numberOfNeighbours === 3) {
            this.nextState = new AliveCell(this.x, this.y);
        } else {
            this.nextState = new DeadCell(this.x, this.y);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new DeadCell(this.x, this.y);
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