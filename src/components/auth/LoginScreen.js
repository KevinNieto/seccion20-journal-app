import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    const dispatch =useDispatch()

    const {loading} = useSelector( state => state.ui );
    
    
    const [formValues, handleInputChange]=useForm({

        email: 'nando@gmail.com',
        password: '12345'

    })

    const {email, password}= formValues;

    const handleLogin =(e)=>{

        e.preventDefault();
        console.log(email, password)
        dispatch(startLoginEmailPassword(email, password));// login extraido del archivo auth, recibe un uid y un nombre
    }
    const handleGoogleLogin =(e)=>{
        dispatch(startGoogleLogin());// login extraido del archivo auth, recibe un uid y un nombre
    }
    
    
    return (
    <>
        <h3 className='auth__title'>
            Login
        </h3>

        <form onSubmit={handleLogin}>
            <input
                className='auth__input'
                type='text'
                placeholder='Email'
                name='email'
                autoComplete='off'
                onChange={handleInputChange}
                value={email}
            
            />
            <input
                className='auth__input'
                type='password'
                placeholder='Password'
                name='password'
                onChange={handleInputChange}
                value={password}
            
            />

            <button 
                type='submit'
                className='btn btn-primary btn-block'
                disabled={ loading }
            >
                Login
            </button>

            <div className='auth__social-networks'>
                <p>Login with social network</p>
                <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>

            <Link className='link' to="/auth/register">Create new account</Link>


        </form>
        
    </>
  )
}
