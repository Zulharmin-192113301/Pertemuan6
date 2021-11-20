import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state ={
      isAuth : false
    }
  }


  render() {
    return (
      <Router>
        <div>
          <ul style={{listStyle: 'none'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>

        <Switch>
            <Route path='/' exact render={() => <div>Halaman Home ya</div>} />
            <Route path='/news' render={() => <div>Kalo ini halaman News</div>} />
            <Route path='/login' render={()=> <div> <button>Login</button></div>} />
              <Route path='/profile' render={()=> this.state.isAuth ? <div>Ini halaman Profile</div> : <Redirect to='/login' />} />
        </Switch>

        </div>
      </Router>
    )
  }
}

export default App;