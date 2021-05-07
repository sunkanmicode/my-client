import React, { Fragment, useState, useEffect } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/react-toastify.css';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import './App.css';

toast.configure();

function App() {

  const [isAuth, setIsAuth ] = useState(false);

  const setAuth = (boolean)=>{
      setIsAuth(boolean)
  };

  const isVerified = async()=>{
    try {
      const response = await fetch('https://dry-scrubland-57259.herokuapp.com/auth/is-verify',{
        method: 'GET',
        headers: {token: localStorage.token}
      });

      const data = await response.json();
      console.log(data);
      data === true? setIsAuth(true): setIsAuth(false)

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(()=>{
    isVerified();
  })
  
  return (
    <Fragment>
      <Router>
        <div className='container'>
        <Switch>
          <Route exact path ='/login' 
            render={props =>
                  !isAuth?( <Login {...props} 
                    setAuth={setAuth} />
                ):(
                  <Redirect to = '/dashboard' />
                )
              } 
          />

          <Route exact path ='/register' 
            render={props => 
                  !isAuth? (
                  <Register {...props}
                  setAuth={setAuth} />
                ):(
                  <Redirect to='/login' />
                )
              } 
          />

          <Route exact path ='/dashboard' 
            render={props => 
                  isAuth? (
                  <Dashboard {...props} 
                  setAuth={setAuth}/>
                ):(
                  <Redirect to="/login" />
                )
              } 
          />

        </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
