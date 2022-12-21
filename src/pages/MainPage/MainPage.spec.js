import React from "react";
import renderer from "react-test-renderer";
import MainPage from './MainPage';

describe("MainPage Snapshot testing", () => {
  let domTree;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    domTree = renderer.create(<MainPage {...mockProps} />);
  })

  it("MainPage renders correctly", () => {
    expect(domTree).toMatchSnapshot();
  });

  it('filter robots ', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: 'a',
      isPending: false
    }
    domTree = renderer.create(<MainPage {...mockProps}/>)
    expect(domTree.getInstance().filterRobots()).toEqual([]);
  });

  it('filter robots correctly ', () => {
    const filterRobots = [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }]
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz'
        }
      ],
      searchField: 'a',
      isPending: false
    }
    domTree = renderer.create(<MainPage {...mockProps}/>)
    expect(domTree.getInstance().filterRobots()).toEqual(filterRobots);
  });

  it('is pending correctly to true', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: 'a',
      isPending: true
    }
    domTree = renderer.create(<MainPage {...mockProps}/>)
    expect(domTree.getInstance().filterRobots()).toEqual([]);
  });
});
