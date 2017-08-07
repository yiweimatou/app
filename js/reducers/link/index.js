import * as actions from '../../actions/link';
import * as types from '../../actions/index';

const initialState = {
  focus_: [],
  _focus: [],
  _pending: false,
  pending_: false,
};

export default function linkReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_MY_FOCUS[types.REQUEST]:
      return {
        ...state,
        _pending: true,
      };
    case actions.FETCH_MY_FOCUS[types.SUCCESS]:
      return {
        ...state,
        _focus: action.payload,
        _pending: false,
      };
    case actions.FETCH_MY_FOCUS[types.FAILURE]:
      return {
        ...state,
        _pending: false,
      };
    case actions.FETCH_FOCUS_ME[types.REQUEST]:
      return {
        ...state,
        pending_: false,
      };
		case actions.FETCH_FOCUS_ME[types.SUCCESS]:
			return {
				...state,
				pending_: true,
				focus_: action.payload,
			}
    default:
      return state;
  }
}
