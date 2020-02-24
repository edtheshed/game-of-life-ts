import React from "react";
import {mount, render, shallow} from "enzyme";
import ConfigBar from "./ConfigBar";

describe("given a config bar", () => {

    describe("when config values are set", () => {

        it("should call the function", async () => {
            const mockFunction = jest.fn();
            const wrapper = mount(<ConfigBar getConfig={mockFunction} />)

            wrapper.find("#width").instance().value = 10;
            wrapper.find("#height").instance().value = 15;
            wrapper.find("#cycle-interval").instance().value = 100;
            wrapper.find("#button-create").simulate("click");

            expect(mockFunction.mock.calls.length).toBe(1);
            expect(mockFunction).toBeCalledWith({
                width: "10",
                height: "15",
                cycleInterval: "100"
            })
        })
    })
});
