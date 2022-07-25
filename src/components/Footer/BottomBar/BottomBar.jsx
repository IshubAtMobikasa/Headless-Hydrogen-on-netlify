import React from 'react'

const BottomBar = ({text, bgColor}) => {
  return (
    <div className='bottom_bar'>
        <p style={{backgroundColor:bgColor}}>{text}</p>
    </div>
  )
}

export default BottomBar