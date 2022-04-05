import React from "react";
import { Platform } from 'react-native';

import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";

import Plan from "../../../src/screens/Plan";

/*jest.mock('react-native', () => ({
  Platform: { OS: 'ios' },
}));*/

describe("should renderer all tests and components", () => {
  const tree = renderer.create(<Plan />);

  it("Should renders correctly with defaults", () => {
    expect(tree).toMatchSnapshot();
  });

  /*test("Platform.OS should be 'ios'", () => {
    expect(Platform.OS).toBe('ios');
  });*/
});
