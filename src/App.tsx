import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Grid} from "./components/GameDisplay/Grid";
import Game from "./components/GameLogic/Game";
import {CellState} from "./components/GameLogic/CellState";

export interface AppState {
    board: CellState[][]
    alive: boolean
}

interface AppProps {
    game: Game
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.callNext = this.callNext.bind(this);
        this.createGlider = this.createGlider.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.state = {
            board: props.game.board,
            alive: false
        }
    }

    callNext(): void {
        this.props.game.cycle();
        this.setState({board: this.props.game.board});
    }

    createGlider(): void {
        this.props.game.toggleCellState(0, 1);
        this.props.game.toggleCellState(1, 2);
        this.props.game.toggleCellState(2, 0);
        this.props.game.toggleCellState(2, 1);
        this.props.game.toggleCellState(2, 2);
        this.setState({board: this.props.game.board});
    }

    toggleCellState(x: number, y: number): void {
        this.props.game.toggleCellState(x, y);

        this.setState({board: this.props.game.board});
    }

    gameCycle() {
        if (this.state.alive) {
            this.callNext();
            setTimeout(() => this.gameCycle(), 10);
        }
    }

    async toggleGame(): Promise<void> {
        this.setState({alive: !this.state.alive});
        await 200;
        this.gameCycle();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="gameGrid">
                    <Grid board={this.state.board} toggleCellState={this.toggleCellState.bind(this)}/>
                    <div>
                        <button onClick={this.createGlider}>Create Glider</button>
                        <button onClick={this.callNext}>Next Cycle</button>
                        <button onClick={this.toggleGame}>Toggle Start</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
