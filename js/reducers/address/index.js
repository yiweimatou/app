import * as types from '../../actions/index';
import * as actions from '../../actions/address/index';

const initialState = {
  pending: false,
  data: [],
}

export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ADDRESS[types.REQUEST]:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_ADDRESS[types.SUCCESS]:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case actions.FETCH_ADDRESS[types.FAILURE]:
      return {
        ...state,
        pending: false,
      }
    default:
      return state;
  }
}