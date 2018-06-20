import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './Home'
import LevelSelect from './LevelSelect'
import LevelPlay from './LevelPlay'

export const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Levels: {screen: LevelSelect},
  Level: {screen: LevelPlay},
},{initialRouteName:'Home',})


class Nav extends Component {
  render(){
    return(
      <App />
    )
  }
}

export default Nav