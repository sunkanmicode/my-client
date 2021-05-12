import React from 'react'

function Header() {
    return (
        <div className='header'>
            <h1 className='logo'><a href='/'>Sunkanmi</a>  </h1>
            <ul>
                <li><a href='/'>Home</a> </li>
                <li><a href='/register'>Register</a> </li>
                <li><a href='/login'>Login</a> </li>
            </ul>

        </div>
    )
}

export default Header
