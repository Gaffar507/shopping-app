import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/east';
import './slider.scss'

const Slider = () => {
    const [ count, setCount ] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

      const changeValue = (value)=> {
        if (value === 'next') {
            setCount(count + 1)
            if (count === data.length-1) {
                setCount(0)
            }
        } 
        if (value === "previous") {
            setCount(count - 1)
            if (count <= 0) {
                setCount( data.length -1 )
            }
        }
      }
  return (
    <div className='slider'>
      <div className="img-container" style={{transform:`translateX(-${count * 100}vw)`}}>
        <img src={data[0]} alt='item'/>
        <img src={data[1]} alt='item'/>
        <img src={data[2]} alt='item'/>
      </div>
      <div className="buttons">
        <button className='btn' onClick={(()=>changeValue('previous'))}><WestIcon/></button>
        <button className='btn' onClick={(()=>changeValue('next'))}><EastIcon/></button>
      </div>
    </div>
  )
}

export default Slider
