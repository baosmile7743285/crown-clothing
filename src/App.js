import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.action';
// import { dispatch } from '../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';
class App extends React.Component {
  unsubcribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth) ; 

      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
        })
      });
      
      }
      setCurrentUser({ currentUser: userAuth});
    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render(){
      return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);