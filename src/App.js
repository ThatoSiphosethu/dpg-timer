import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/authContext';
import LogIn from './pages/login';
import Register from './pages/register';
import Clock from './components/clock';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {

  return (
  
    
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>

        <div className='w-100' style={{maxWidth: '500px'}}>
          <Router>
          <AuthProvider>
            <Switch>
              <Route exact='/' component={Clock}/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={LogIn}/>
            </Switch>
          </AuthProvider>
          </Router>
         
        </div>
      
      </Container>
    
  )
}

export default App;
