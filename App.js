import React from 'react'

import ContactList from './src/ContactList'

import { StackNavigator  } from 'react-navigation'

const AppStack = StackNavigator(
  {
    Home: { screen: ContactList }
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
