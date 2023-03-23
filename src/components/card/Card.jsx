import React from 'react'

const Card = ({item}) => {
  return (
    
    <div className='card'>
        <div className="cardimg">
            <img className='img'  src={item.imgScr} alt="" />
        </div>
        <div className="cardbody">
            <h1 className='title'>{item.title}</h1>
        </div>
    </div> 

    
  )
}

export default Card