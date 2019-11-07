import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubcribeFromAuth = null;
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth) ; 

      userRef.onSnapshot(snapShot => {
        this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
        })
      });
      
      }
      this.setState({ currentUser: userAuth});
    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render(){
      return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;