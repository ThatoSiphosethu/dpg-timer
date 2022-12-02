import React, {useState} from 'react';

const LogIn = (props) =>
{
    
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // const handleChange = (e) => {
    //     // const {name,value} = e.target;
    //     // setState({[name] : value})
    // }

    return (
        <div className='auth-form'>
            <h2>Log-In</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor = "email">Email</label> 
                <input onChange={email => setEmail(email.value)} value={email} type="email" placeholder='email' id='email' name='email' required/>

                <label htmlFor = "password">Password</label> 
                <input onChange={password => setPassword(password.value)} value={password} type="password" placeholder='password' id='password' name='password' required/>

                <button onSubmit={handleSubmit}>Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!!</button>
        </div>
    )
  
}
 
export default LogIn;