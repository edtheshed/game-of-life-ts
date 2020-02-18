export interface CellState {

    setNextState(numberOfNeighbours: number): void;
    getCellState(): CellState;
    isAlive(): boolean;
}