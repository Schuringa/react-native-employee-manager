import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
