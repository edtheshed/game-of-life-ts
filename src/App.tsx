import React from 'react';
import './App.css';
import ConfigBar from "./components/ConfigBar";
import {ConfigValues} from "./components/ConfigValues";
import {Header} from "./components/Header";
import {GameOfLife} from "./components/GameOfLife/GameOfLife"

class App extends React.Component<any, ConfigValues> {

    constructor(props: any) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            cycleInterval: 0
        }
    }

    setConfig(values: ConfigValues) {
        this.setState({
            width: values.width,
            height: values.height,
            cycleInterval: values.cycleInterval
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <GameOfLife />
                <ConfigBar getConfig={this.setConfig.bind(this)}/>
                <h1>{this.state.width}</h1>
                <h1>{this.state.height}</h1>
            </div>
        )
    }
}

export default App;
