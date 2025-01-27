import React from 'react'
import {data} from './MidCard.js'
import './Middle.css'
function MiddleCard() {
  return (
    <div className='MidCards'>
     {data.map((item,index)=>(
        <div key={index} className='MidCrds'>
            <div className='MidCardImg'>
                <img src={item.img}></img>
            </div>
            <div className='MidCardP'>
                <p>{item.content}</p>
                
            </div>
        </div>
     ))}
    </div>
  )
}

export default MiddleCard