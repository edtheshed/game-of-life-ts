import React from "react";
import {mount} from "enzyme";
import App from "./App";

describe("given an app and a config bar", () => {

    describe("when config values are set", () => {

        it("should save the state", async () => {
            const wrapper = mount(<App/>)

            const widthInput = wrapper.find("#width").simulate("change", {target: {value: 10}});
            const heightInput = wrapper.find("#height").simulate("change", {target: {value: 15}});
            const submitButton = wrapper.find("#button-create").simulate("click");

            expect(wrapper.state("width")).toEqual(10);
            expect(wrapper.state("height")).toEqual(15);

        })
    })
})
