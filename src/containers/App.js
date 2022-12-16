import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
      <h1>Loading</h1> :
      (
        <>
          <header className='tc mb4'>
            <h1>Robots</h1>
          </header>
          <div  className='tc mb4'>
            <SearchBox
              searchChange={onSearchChange}
            />
          </div>
          <Scroll>
            <ErrorBoundary>
              <CardList
                robots={filterRobots}
              />
            </ErrorBoundary>
          </Scroll>
        </>
      );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
