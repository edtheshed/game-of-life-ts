import React from "react";
import {ConfigValues} from "./ConfigValues";

export function ConfigBar(props: { onClick: any }) {

    let widthRef = React.createRef<any>();
    let heightRef = React.createRef<any>();
    let cycleRef = React.createRef<any>();

    function getValues(): void {
        let values: ConfigValues = {
            width: widthRef.current.value,
            height: heightRef.current.value,
            cycleInterval: cycleRef.current.value
        };

        props.onClick(values);

    }

    return (
        <div>
            <input id="width" type="number" ref={widthRef}/>

            <input id="height" type="number" ref={heightRef}/>

            <input id="cycleInterval" type="number" ref={cycleRef}/>

            <button id="button-create" onClick={getValues}>Submit</button>
        </div>
    );
}