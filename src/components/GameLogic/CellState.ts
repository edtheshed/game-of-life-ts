import { Coordinate } from "./Coordinate";

export interface CellState {

    setNextCellState(numberOfNeighbours: number): void;

    getNextCellState(): CellState;

    isAlive(): boolean;

    getId(): string;

    getCoordinate(): Coordinate;
}
