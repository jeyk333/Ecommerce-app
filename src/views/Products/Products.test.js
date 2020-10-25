import React from "react";
import { shallow } from "enzyme";
import Products from "./Products";

describe("Products", function () {
  let mountedApp;
  it("renders without crashing", () => {
    mountedApp = shallow(<Products />);
    console.log(mountedApp.debug());
  });
});
