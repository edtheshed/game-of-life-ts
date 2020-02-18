import { CellState } from "./CellState"
import { AliveCell } from "./AliveCell";

export class DeadCell implements CellState {
    
    nextState!: CellState;

    isAlive(): boolean {
        return false;
    }

    setNextState(numberOfNeighbours: number): void {
        if (numberOfNeighbours == 3){
            this.nextState = new AliveCell;
        }
        else {
            this.nextState = new DeadCell;
        }
    }

    getCellState(): CellState {
        return this.nextState;
    }
    
}