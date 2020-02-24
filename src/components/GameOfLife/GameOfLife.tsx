import Game from "./Game";
import {ConfigValues} from "../ConfigValues";
import React from "react";

export class GameOfLife extends React.Component<any, gameConfig> {

    constructor(props: { config: ConfigValues, next: boolean, start: boolean}) {
        super(props);

        this.state = {
            config: props.config,
            next: props.next,
            start: props.start
        }
    }
}

interface gameConfig {
    config: ConfigValues
    next: boolean
    start: boolean
}