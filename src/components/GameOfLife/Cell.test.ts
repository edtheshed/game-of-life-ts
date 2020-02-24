import {CellState} from "./CellState";
import {AliveCell} from "./AliveCell";
import {DeadCell} from "./DeadCell";

describe("a cell with a dead state", () => {
    let cell: CellState;

    beforeEach(() => {
        cell = new DeadCell();
    });

    it("should be dead", () => {
        expect(cell.isAlive()).toBeFalsy();
    });

    describe("with 3 alive neighbours", () => {
        it("should come to life", () => {
            cell.setNextCellState(3);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeTruthy();
        });
    });

    describe("with 2 or less alive neighbours", () => {
        it("should remain dead", () => {
            cell.setNextCellState(2);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeFalsy();
        });
    });

    describe("with 4 or more alive neighbours", () => {
        it("should remain dead", () => {
            cell.setNextCellState(4);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeFalsy();
        });
    });
});

describe("a cell with an alive state", () => {
    let cell: CellState;

    beforeEach(() => {
        cell = new AliveCell();
    });

    it("should be alive", () => {
        expect(cell.isAlive()).toBeTruthy();
    });

    describe("with 1 or less alive neighbours", () => {
        it("should die", () => {
            cell.setNextCellState(1);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeFalsy();
        });
    });

    describe("with 4 or more alive neighbours", () => {
        it("should die", () => {
            cell.setNextCellState(4);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeFalsy();
        });
    });

    describe("with 2 or 3 alive neighbours", () => {
        it("should remain alive", () => {
            cell.setNextCellState(2);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeTruthy();

            cell.setNextCellState(3);
            cell = cell.getNextCellState();
            expect(cell.isAlive()).toBeTruthy();
        });
    });
});
