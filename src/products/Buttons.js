import React from 'react'

function Buttons({filterItems}) {
    return (
        <div className='buttons'>
            <button className="filter-btn" onClick={()=>filterItems('bag')}>
                knitted Bags
            </button>
            <button className="filter-btn" onClick={()=>filterItems('shoe')}>
                knitted shoes
            </button>
            <button className="filter-btn" onClick={()=>filterItems('cardigan')}>
                knitted Tops
            </button>
            <button className="filter-btn" onClick={()=>filterItems('babyWear')}>
                Baby wears
            </button>
        </div>
    )
}

export default Buttons
