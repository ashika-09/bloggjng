import React from 'react'
import Logoimg from './img/Logoimg.jpeg'


function Logo({width = '100px'}) {
  return (
    <div><img src={Logoimg} alt="Logo" className=' w-28 rounded-2xl' /></div>
  )
}

export default Logo