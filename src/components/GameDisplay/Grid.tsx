import React from "react";
import {CellState} from "../GameLogic/CellState";
import "./Grid.css"

export function Grid(props: { board: CellState[][] }) {

    const Square = (props: { cellState: CellState }) => {
        return (
            <td key={props.cellState.getId()} className={props.cellState.isAlive() ? "aliveCell" : "deadCell"}>
            </td>
        );
    }

    function renderRow(row: CellState[]) {
        return <tr> {row.map(renderColumn)} </tr>
    }

    function renderColumn(cell: CellState) {
        return <Square cellState={cell}/>
    }

    function render() {
        return <table className="gameGrid" >{props.board.map(renderRow)}</table>
    }

    return (
        render()
    );
}