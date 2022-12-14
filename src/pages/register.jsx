import React, {useRef, useState} from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/authContext';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
    
    const emailRef = useRef();

    const passwordRef = useRef();

    const passwordConfirmationRef = useRef();

    const {signup} = useAuth();

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    // const history = useHistory()


    async function handleSubmit (e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError ('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            // history.push('/')
        }

        catch {
            setError ('Failed to create an account')
        }
        setLoading(false)
       
    }

    return (
        <div className='auth-form'>
            <Card>
                <Card.Body>
                    <h2>Create Account</h2>
                   
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required/> 
                        </Form.Group>

                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/> 
                        </Form.Group>

                        <Form.Group id='password-confirm'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmationRef} required/> 
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
           <div>
           Already have an account? <Link to='./login'>Log In Here </Link> 
           </div>

        </div>
    )
  
}
 
