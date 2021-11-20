import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state ={
      isAuth : false
    }
  }


  render() {
    const LoginButton = withRouter(({history}) => (
      <button onClick={()=>{
        this.setState({isAuth : true})
        history.push('/profile')
      }}>Login</button>
  ))

  const LogoutButton = withRouter(({history}) => (
    <button onClick={()=>{
      this.setState({isAuth : false})
      history.push('/login')
    }}>Logout</button>
))

const routes = [{
  path : '/',
  exact : true,
  render : ()=> <div>Ini halaman Home</div>
},{
  path : '/news',
  render : ()=> <div>Ini halaman News</div>
},{
  path : '/login',
  render : ()=> <LoginButton />
},{
  path : '/profile',
  render : ()=> this.state.isAuth ? <div>Ini halaman Profile <br /><LogoutButton /></div> : <Redirect to='/login' />
}]


    return (
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>

        <Switch>
        {
              routes.map((item, index)=>(
                <Route path={item.path} exact={item.exact} render={item.render} />
              ))
            }
        </Switch>

        </div>
      </Router>
    )
  }
}

export default App;