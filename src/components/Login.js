import React, { Fragment, useState } from 'react';
import{ Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login( { setAuth }) {
    const [ input, setInput ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = input;
    
    const onChangeHandle = async(e)=>{
        setInput({ ...input, [e.target.name]: e.target.value})
    };
    const onSubmitForm = async(e)=>{
        e.preventDefault();

        try {
                const body = { email, password}

            const response = await fetch('https://dry-scrubland-57259.herokuapp.com/auth/login',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            const data = await response.json();
            if(data.token){
                localStorage.setItem('token', data.token);
                // console.log(data);
                setAuth(true)
                toast.success('Login Successful')
            }else{
                setAuth(false)
                toast.error(data)
            }
            
          


        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        
        <Fragment>
            <h1 className='text-center my-5'>Login</h1>

            <form onSubmit={onSubmitForm}>
                <input 
                    className='form-control my-3'
                    type='email'
                    name='email'
                    placeholder='test@example.com' 
                    required
                    value={email}
                    onChange={(e)=>onChangeHandle(e)} 
                />
                <input 
                    className='form-control my-3'
                    type='password'
                    name='password'
                    placeholder='password'
                    required
                    value={password}
                    onChange={(e)=>onChangeHandle(e)} 
                />
                
            <button className='btn btn-success btn-block'>
                Login
            </button>
            <Link to='/register'>Register</Link>

            </form>
            
        </Fragment>
    )
}

export default Login
