import React from 'react'
import {nextSlide, prevSlide, dotSlide} from '../features/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-tailwind/react';

function Slider() {
    
    const dispatch= useDispatch();
  const slideIndex= useSelector((state)=>state.slider.value)
  console.log( "sliderindex",slideIndex)

  return (
    <div>
        <Button onClick={()=>dispatch(nextSlide(slideIndex +1))}>next</Button>
        <Button onClick={()=>dispatch(prevSlide(slideIndex -1))}>prev</Button>
     
    </div>
  )
}

export default Slider