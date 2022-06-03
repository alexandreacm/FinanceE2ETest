import * as React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import Plan from "../../../App";

describe("renders correctly", () => {
  const tree = create(<Plan />).toJSON();

  it("Should renders correctly app component", () => {
    expect(tree).toMatchSnapshot();
  });
});
