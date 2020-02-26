export interface CellState {

    setNextCellState(numberOfNeighbours: number): void;

    getNextCellState(): CellState;

    isAlive(): boolean;

    getXCoordinate(): number;

    getYCoordinate(): number;

    getId(): string;
}
