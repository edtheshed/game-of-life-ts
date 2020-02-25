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
        this.setAlive = this.setAlive.bind(this);
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

    setAlive(): void {
        this.props.game.setCellAlive(0, 1);
        this.props.game.setCellAlive(1, 2);
        this.props.game.setCellAlive(2, 0);
        this.props.game.setCellAlive(2, 1);
        this.props.game.setCellAlive(2, 2);
        this.setState({board: this.props.game.board});
    }

    gameCycle() {
        if (this.state.alive) {
            this.callNext();
            setTimeout(() => this.gameCycle(), 200);
        }
    }

    toggleGame(): void {
        this.setState({alive: !this.state.alive});
        this.gameCycle();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <Grid board={this.state.board}/>
                    <button onClick={this.setAlive}>Give Life</button>
                    <button onClick={this.callNext}>Next Cycle</button>
                    <button onClick={this.toggleGame}>Toggle Start</button>
                </div>
            </div>
        )
    }
}

export default App;
