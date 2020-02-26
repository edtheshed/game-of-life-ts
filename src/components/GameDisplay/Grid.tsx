import React from "react";
import {CellState} from "../GameLogic/CellState";
import "./Grid.css"

export function Grid(props: { board: CellState[][], setCellAlive: any }) {

    const Square = (props: { cellState: CellState, setCellAlive: any }) => {
        return (
            <a onClick={() => props.setCellAlive(props.cellState.getId())}>
                <td key={props.cellState.getId()} className={props.cellState.isAlive() ? "aliveCell" : "deadCell"} />
            </a>
        );
    }

    function renderRow(row: CellState[]) {
        return <tr> {row.map(renderColumn)} </tr>
    }

    function renderColumn(cell: CellState) {
        return <Square cellState={cell} setCellAlive={props.setCellAlive} />
    }

    function render() {
        return <table className="gameGrid">{props.board.map(renderRow)}</table>
    }

    return (
        render()
    );
}