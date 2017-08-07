import * as actions from '../../actions/auth';
import * as types from '../../actions';

const initialState = {
  user: { },
  key: 0,
  token: null,
  pending: false,
  loginTime: null,
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case actions.LOGIN_WITH_CODE[types.REQUEST]:
    case actions.LOGIN_WITH_PWD[types.REQUEST]:
      return {
        ...initialState,
        pending: true,
      }
    case actions.LOGIN_WITH_CODE[types.SUCCESS]:
    case actions.LOGIN_WITH_PWD[types.SUCCESS]:
      return {
        key: action.response.key,
        token: action.response.token,
        user: {},
        pending: false,
        loginTime: action.response.sysdate, 
      }
    case actions.LOGIN_WITH_CODE[types.FAILURE]:
    case actions.LOGIN_WITH_PWD[types.FAILURE]:
      return {
        ...state,
        pending:false,
      }
    case actions.LOGOUT[types.REQUEST]:
      return {
        ...state,
        pending: true,
      }
    case actions.LOGOUT[types.SUCCESS]:
      return initialState;
    case actions.LOGOUT[types.FAILURE]:
      return {
        ...state,
        pending: false,
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }

    case actions.UPDATE_USER[types.REQUEST]:
      return {
        ...state,
        pending: true,
      }
    case actions.UPDATE_USER[types.SUCCESS]:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        },
        pending: false,
      }
    case actions.UPDATE_USER[types.FAILURE]:
      return {
        ...state,
        pending: false,
      }
    default:
      return state;
  }
}