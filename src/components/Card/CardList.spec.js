import React from "react";
import renderer from "react-test-renderer";
import CardList from './CardList';

describe("CardList Snapshot testing", () => {
  it("CardList renders correctly", () => {
    const mockRobots = [
      {
        id: 1,
        name: 'John Doe',
        username: 'john_doe',
        email: 'j.doe@mail.com'
      }
    ]
    const domTree = renderer.create(<CardList robots={mockRobots} />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
