import {CellState} from "./CellState"
import {DeadCell} from "./DeadCell";
import {Coordinate} from "./Coordinate";

export class AliveCell implements CellState {

    nextState!: CellState;
    coordinates: Coordinate;
    id: string;

    constructor(coordinates: Coordinate) {
        this.coordinates = coordinates;
        this.id = `${coordinates.getXCoordinate()}${coordinates.getYCoordinate()}`;
    }

    isAlive(): boolean {
        return true;
    }

    setNextCellState(numberOfNeighbours: number): void {
        if (AliveCell.isLonely(numberOfNeighbours) || AliveCell.isOvercrowded(numberOfNeighbours)) {
            this.nextState = new DeadCell(this.coordinates);
        } else if (AliveCell.isHappyWithLife(numberOfNeighbours)) {
            this.nextState = new AliveCell(this.coordinates);
        }
    }

    getNextCellState(): CellState {
        return this.nextState ? this.nextState : new AliveCell(this.coordinates);
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

    getCoordinate(): Coordinate {
        return this.coordinates;
    }
}