import React from 'react'

import ContactList from './src/ContactList'
import ContactView from './src/ContactView'

import { StackNavigator  } from 'react-navigation'

const AppStack = StackNavigator(
  {
    Home: { screen: ContactList },
    ContactView: { screen: ContactView }
  },
  {
    initialRouteName: 'Home'
  }
)

class App extends React.Component {
  render () {
    return (
      <AppStack />
    )
  }
}

export default App
