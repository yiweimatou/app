import { TabNavigator } from "react-navigation";
import Link from "../components/Link";
import Matou from "../components/Matou";
import Discover from "../components/Discover";
import Profile from "../components/Profile";

const Tabs = TabNavigator({
  Home: {
    screen: Matou,
  },
  Link: {
    screen: Link,
  },
  Discover: {
    screen: Discover,
  },
  Profile: {
    screen: Profile,
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: "#1569f4",
  },
});

export default Tabs;