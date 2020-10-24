import React from "react";
import {CellState} from "../GameLogic/CellState";
import "./Grid.css"

export function Grid(props: { board: CellState[][], toggleCellState: any }) {

    const Square = (props: { cellState: CellState, toggleCellState: any }) => {
        return (
            <a onClick={() => props.toggleCellState(props.cellState.getXCoordinate(), props.cellState.getYCoordinate())}>
                <td key={props.cellState.getId()} className={props.cellState.isAlive() ? "aliveCell" : "deadCell"} />
            </a>
        );
    }

    function renderRow(row: CellState[]) {
        return <tr> {row.map(renderColumn)} </tr>
    }

    function renderColumn(cell: CellState) {
        return <Square cellState={cell} toggleCellState={props.toggleCellState} />
    }

    function render() {
        return <table className="gameGrid">{props.board.map(renderRow)}</table>
    }

    return (
        render()
    );
}