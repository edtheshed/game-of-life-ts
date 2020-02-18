import { CellState } from "./CellState"
import { DeadCell } from "./DeadCell";

export class AliveCell implements CellState {
    
    nextState!: CellState;

    isAlive(): boolean {
        return true;
    }

    setNextState(numberOfNeighbours: number): void {
        if (this.isLonely(numberOfNeighbours) || this.isOvercrowded(numberOfNeighbours)){
            this.nextState = new DeadCell;
        }
        else if (this.isHappyWithLife(numberOfNeighbours)) {
            this.nextState = new AliveCell;
        }
    }

    getCellState(): CellState {
        return this.nextState;
    }
    
    private isLonely(numberOfNeighbours: number): boolean{
        if (numberOfNeighbours < 2){
            return true;
        }
        return false;
    }

    private isOvercrowded(numberOfNeighbours: number): boolean {
        if (numberOfNeighbours > 3){
            return true;
        }
        return false;
    }

    private isHappyWithLife(numberOfNeighbours: number): boolean {
        if (numberOfNeighbours === 3 || numberOfNeighbours === 2){
            return true;
        }
        return false;
    }
}