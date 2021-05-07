import React from 'react'
import { Grid } from '@material-ui/core';



function Pictures({pictures}) {
    return (
        <div className='img-container'>
            <div className='menu-section'>
            {pictures.map((picture) =>{
                const { img, desc, price} = picture;
                return(
                    <div className='col-4'>
                        <img src={img} alt='products' />
                        <h3>{desc}</h3>
                        <p>${price}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Pictures
