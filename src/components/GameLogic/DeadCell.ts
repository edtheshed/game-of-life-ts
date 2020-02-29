import {CellState} from "./CellState"
import {AliveCell} from "./AliveCell";
import {Coordinate} from "./Coordinate";

export class DeadCell implements CellState {

    nextState!: CellState;

    coordinates: Coordinate;
    id: string;

    constructor(coordinates: Coordinate) {
        this.coordinates = coordinates;
        this.id = `${coordinates.getXCoordinate()}${coordinates.getYCoordinate()}`;
    }

    isAlive(): boolean {
        return false;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (numberOfNeighbours === 3) {
            this.nextState = new AliveCell(this.coordinates);
        } else {
            this.nextState = new DeadCell(this.coordinates);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new DeadCell(this.coordinates);
    }

    getId(): string {
        return this.id;
    }

    getCoordinate(): Coordinate {
        return this.coordinates;
    }
}

