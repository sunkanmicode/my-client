import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ setAuth}) {

    const [ input, setInput ] = useState({
        email: '',
        password: '',
        name: ''
    });
    const { email, password, name } = input;

    const onChangeHandle = async(e)=>{
        setInput({ ...input, [e.target.name]: e.target.value})
    }

    const onSubmitForm = async(e)=>{
        e.preventDefault();

        try {
                const body = { email, password, name}

            const response = await fetch('http://localhost:4000/auth/register',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);

            setAuth(true)


        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className='text-center my-5'>Register</h1>

            <form onSubmit={onSubmitForm}>
                <input 
                    className='form-control my-3'
                    type='email'
                    name='email'
                    placeholder='test@example.com' 
                    value={email}
                    onChange={(e)=>onChangeHandle(e)} 
                />
                <input 
                    className='form-control my-3'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={password}
                    onChange={(e)=>onChangeHandle(e)} 
                />
                <input 
                    className='form-control my-3'
                    type='name'
                    name='name'
                    placeholder='joe fuel' 
                    value={name}
                    onChange={(e)=>onChangeHandle(e)}
            />
            <button className='btn btn-success btn-block'>
                Submit
            </button>
            <Link to='/login'>Login</Link>

            </form>
        </Fragment>
    )
}

export default Register
