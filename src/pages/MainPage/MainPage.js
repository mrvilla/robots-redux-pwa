import React, { Component } from 'react';
import CardList from '../../components/Card/CardList';
import SearchBox from '../../components/Search/SearchBox';
import Scroll from '../../components/Scroll/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Header/Header';
import { robots } from '../../robots';

export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  filterRobots = () => {
    const { searchField, robots } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <>
        <Header />
        <div  className='tc mb4'>
          <SearchBox
            searchChange={onSearchChange}
          />
        </div>
        <Scroll>
          { isPending ? <h1>Loading....</h1> :
            <ErrorBoundary>
              <CardList
                robots={this.filterRobots(robots)}
              />
            </ErrorBoundary>
          }
        </Scroll>
      </>
    );
  };
}

export default MainPage;
