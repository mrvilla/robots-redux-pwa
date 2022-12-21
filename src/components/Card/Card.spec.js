import React from "react";
import renderer from "react-test-renderer";
import Card from './Card';

describe("Card Snapshot testing", () => {
  it("Card renders correctly", () => {
    const domTree = renderer.create(<Card />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
