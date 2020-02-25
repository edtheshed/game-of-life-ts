import {CellState} from "./CellState"
import {DeadCell} from "./DeadCell";

export class AliveCell implements CellState {

    nextState!: CellState;
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    isAlive(): boolean {
        return true;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (AliveCell.isLonely(numberOfNeighbours) || AliveCell.isOvercrowded(numberOfNeighbours)) {
            this.nextState = new DeadCell(this.id);
        } else if (AliveCell.isHappyWithLife(numberOfNeighbours)) {
            this.nextState = new AliveCell(this.id);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new AliveCell(this.id);
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
}