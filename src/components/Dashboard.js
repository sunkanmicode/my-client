import React, { Fragment, useState, useEffect } from 'react';
import Buttons from '../products/Buttons';
import Pictures from '../products/Pictures';
import  data  from './Data'

function Dashboard({ setAuth}) {
    const [name, setName ] = useState('');
    const [ showPictures, setShowPictures ] = useState(data);
    

    const getName = async()=>{
        try {
            
            const response = await fetch('https://dry-scrubland-57259.herokuapp.com/dashboard/',{
                method: 'GET',
                headers: {token: localStorage.token}
            });

            const data =  await response.json();
            // console.log(data);
            setName(data.user_name)
            
        } catch (err) {
            console.error(err.message);
        }
    }
    const logout = e =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false)
    }

    useEffect(() => {
        getName();
    }, []);

    const filterItems = (category)=>{
        const newDatas = data.filter((item)=> item.category === category)
        setShowPictures(newDatas);
    }
    return (
        <Fragment>
            
            <h1>Welcome {name} </h1>
            <button onClick={(e)=>logout(e)}>Log out</button>
             <Buttons  filterItems={filterItems}/>
            <Pictures pictures={showPictures}/> 
        </Fragment>
    )
}

export default Dashboard;
