import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAABNmZC7DKRovf8Yxcg13dl6lOqjKizr0',
      authDomain: 'employee-manager-678de.firebaseapp.com',
      databaseURL: 'https://employee-manager-678de.firebaseio.com',
      projectId: 'employee-manager-678de',
      storageBucket: '',
      messagingSenderId: '736860961405'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
