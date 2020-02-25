import {CellState} from "./CellState"
import {AliveCell} from "./AliveCell";

export class DeadCell implements CellState {

    nextState!: CellState;

    id: string;

    constructor(id: string) {
        this.id = id;
    }

    isAlive(): boolean {
        return false;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (numberOfNeighbours === 3) {
            this.nextState = new AliveCell(this.id);
        } else {
            this.nextState = new DeadCell(this.id);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new DeadCell(this.id);
    }

    getId(): string {
        return this.id;
    }

}