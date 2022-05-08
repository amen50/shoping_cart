import HomePage from './pages/homepage/homepage.component';
import { Switch,Route, Redirect } from'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.componet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.conponent';
import './App.css'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';



class App extends React.Component {

   
   unsubscribeFromAuth = null 
   componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot=>{
             setCurrentUser({
             
               id: snapshot.id,
               ...snapshot.data()
             
           }) 
          })
        }
        else{
          setCurrentUser({currentUser: userAuth})
        }
      
    });
   }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render()
      {
        return (
        <div>
          <Header currentUser/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route 
                  exact 
                  path='/signin' 
                  render=
                  {
                    () => this.props.currentUser?
                      (<Redirect to='/'/>)
                          :
                         <SignInAndSignUpPage/>
                        }
                  />
          </Switch>
        </div>
      );}
    }

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})   

const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
