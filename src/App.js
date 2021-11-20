import React, {Component} from 'react';
import './App.css'
import './css/bootstrap.min.css';
import PasPhoto from './img/pasphoto.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  NavLink
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


    return (
      <Router>
      <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
              <ul className='navbar-nav'>
        <li className='nav-item'><NavLink exact activeStyle={{fontWeight: 'bold', color: 'red'}} to='/'>Home &nbsp;</NavLink></li>
        <li className='nav-item'><NavLink activeClassName='active-link' to='/profile'>Profile</NavLink></li>
        </ul>
        </nav>
      
      
      <Switch>
          <Route path='/' exact render={() => <div>Halaman Home ya</div>} />
          <Route path='/login' render={()=> <LoginButton /> } />
          
          <Route path='/profile' render={()=> this.state.isAuth ? 
          
          <div>
            
            <table class="table table-light">
  <thead>
    <tr>
      <th scope="col">Identitas</th>
      <th scope="col">Data</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Pas Photo</th>
      <td><img width='300px' height='auto' src={PasPhoto} /></td>

    </tr>
    <tr>
      <th scope="row">Nama</th>
      <td>Zulharmin</td>

    </tr>
    <tr>
      <th scope="row">Nim</th>
      <td>192113301</td>
    </tr>

    <tr>
      <th scope="row">Jurusan</th>
      <td>Sistem Informasi</td>
    </tr>

    <tr>
      <th scope="row">Kelas</th>
      <td>Ebiz B Sore</td>
    </tr>

    <tr>
      <th scope="row">Semester</th>
      <td>5 (Lima) </td>
    </tr>

  </tbody>
</table>

            <br /><br /> <LogoutButton />  <br /><br /> 
          
          </div> : <Redirect to='/login' />} />
      
      </Switch>
      </div>
      </Router>
  )
  }
}

export default App;