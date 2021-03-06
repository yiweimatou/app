import { NavigationActions, } from 'react-navigation';
import { AppNavigator } from "../../navigators/AppNavigator";

const initialState = 
    AppNavigator.router.getStateForAction(NavigationActions.init());

export default function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
}
