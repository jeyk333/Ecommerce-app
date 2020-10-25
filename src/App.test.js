import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", function () {
  let mountedApp;
  it("renders without crashing", () => {
    mountedApp = shallow(<App />);
  });
  it("renders Routes", () => {
    const route = mountedApp.find("Routes");
    expect(route.length).toBe(1);
  });
});
