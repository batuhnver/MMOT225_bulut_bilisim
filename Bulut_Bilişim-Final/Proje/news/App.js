import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from "./screens/LoadingScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBKcr-yTldjKy7_q6js28Pp5UNComuQG5I",
  authDomain: "news-fc163.firebaseapp.com",
  projectId: "news-fc163",
  storageBucket: "news-fc163.appspot.com",
  messagingSenderId: "428332305768",
  appId: "1:428332305768:web:e2382a8369ac645a125add"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Haberler: HomeScreen
})

const AuthStack = createStackNavigator({
  Giriş: LoginScreen,
  Kaydol: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading"
  }
  )


)