import * as actions from './actions';
import * as types from './../utils/constants';
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middleware = [thunkMiddleware];
const mockStore = configureMockStore(middleware);

describe('actions ', () => {
  it('should create an action to search', () => {
    const text = 'actions'
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("Fetch robots action PENDING", () => {
  it("should handle a robots request API", () => {
    const store = mockStore();
    // console.log('store: ', store);
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    // console.log('action: ', action);
    const expectAction = {
      type: 'REQUEST_ROBOTS_PENDING'
    }
    expect(action[0]).toEqual(expectAction);
  });
});
