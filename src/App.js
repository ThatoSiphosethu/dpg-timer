import React, {useState} from 'react';
import './App.css';
import LogIn from './pages/login';
import Register from './pages/register';
// import { Route} from 'react-router-dom'
// import NavBar from './components/navBar'
// import Clock from './components/clock'


function App() {

  const [currentForm, setCurrentForm] = useState('LogIn');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div>
          {/* <NavBar/> */}

          <div className='content'>
            {/* <Route path="/home" component={Clock}/> */}
            {/* <Route path="/admin" component={Dashboard}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/register" component={Register}/> */}
          </div>


          {/* <Clock/> */}
          {
            currentForm === "LogIn" ? <LogIn onFormSwitch={toggleForm} /> : <Register  onFormSwitch={toggleForm} />
          } 
      </div>    
    </div>
  );
}

export default App;
