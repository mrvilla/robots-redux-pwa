import * as reducers from './reducers'
import * as types from './../utils/constants';

describe('reducer searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(
      {
        searchField: ''
      }
    )
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    const initialStateSearch = {
      searchField: ''
    }

    expect(reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })).toEqual(
      {
        searchField: "abc"
      }
    )
  })
})

describe('requestRobots reducer', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      types: types.REQUEST_ROBOTS_PENDING,
      payload: {
        isPending: true
      }
    })).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
          }
        ]
      })).toEqual({
        robots: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
          }
        ],
        isPending: false,
        error: ''
      }
    )
  })

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: 'Oops'
      })).toEqual(
      {
        isPending: false,
        robots: [],
        error: 'Oops'
      }
    )
  })
})
