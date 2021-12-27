import React from "react";
import { mount } from "enzyme";
import Display from "../../components/Display";

describe("<Display />", () => {
  const display = mount(<Display />);

  test("Display render", () => {
    expect(display.length).toEqual(1);
  });

  test("Header title", () => {
    expect(display.find(".display--title").length).toEqual(1);
  });

});
