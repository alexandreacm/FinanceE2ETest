import React from "react";

import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import Plan from "../../../src/screens/Plan";

describe("should renderer all tests and components", () => {
  const tree = create(<Plan />).toJSON();

  it("Should renders correctly with defaults", () => {
    expect(tree).toMatchSnapshot();
  });

});
