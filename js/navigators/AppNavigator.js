import { StackNavigator,} from "react-navigation";
import Tabs from "./Tabs";
import Setting from "../components/Setting";
import ShoppingAddress from "../components/Profile/ShoppingAddress/index";
import EditShoppingAddress from "../components/Profile/ShoppingAddress/edit";
import NewShoppingAddress from "../components/Profile/ShoppingAddress/new";


const AppNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Setting: {
    screen: Setting
  },
  ShoppingAddress: {
    screen: ShoppingAddress
  },
  EditShoppingAddress: {
    screen: EditShoppingAddress
  },
  NewShoppingAddress: {
    screen: NewShoppingAddress
  }
}, {
  initialRouteName: 'Home',
});

export default AppNavigator;

// const AppWithNavigatorState = ({ dispatch, nav }) =>
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, nav })} />;

// AppWithNavigatorState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired
// };

// export default connect(state => ({
//   nav: state.nav
// }))(AppWithNavigatorState);
