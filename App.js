import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from './src/screens/ComponentsScreen';
import image from "./src/screens/image";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from './src/screens/CounterScreens';
import ColorScreen from "./src/screens/ColorScreens";
import SquaredScreen from "./src/screens/SquareScreen";
import NameScreen from "./src/screens/NameScreen";




const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Images: image,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Squares: SquaredScreen,
    Name: NameScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
