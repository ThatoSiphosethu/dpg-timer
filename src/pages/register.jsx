import React, {useState} from 'react';

const Register = (props) =>
{
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // const handleChange = (e) => {
    //     const {name,value} = e.taret;
    //     this.setState({[name] : value})
    // }

    return (
        <div className='auth-form'>
            <h2>Create Account</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor = "userName">User Name</label> 
                <input onChange={userName => setUserName(userName.value)} value={userName} type="userName" placeholder='Username' id='userName' name='userName' required/>

                <label htmlFor = "email">Email</label> 
                <input onChange={password => setPassword(password.value)} value={email} type="email" placeholder='email' id='email' name='email' required/>

                <label htmlFor = "password">Password</label> 
                <input onChange={password => setPassword(password.value)} value={password} type="password" placeholder='password' id='password' name='password' required/>

                <button onSubmit={handleSubmit}>Submit</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('LogIn')}>Already have an account? Log-in here!!</button>
        </div>
    )
  
}
 
export default Register;