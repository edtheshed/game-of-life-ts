import {CellState} from "./CellState"
import {AliveCell} from "./AliveCell";

export class DeadCell implements CellState {

    nextState!: CellState;

    isAlive(): boolean {
        return false;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (numberOfNeighbours === 3) {
            this.nextState = new AliveCell;
        } else {
            this.nextState = new DeadCell;
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new DeadCell;
    }

}