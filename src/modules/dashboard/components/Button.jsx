import React from 'react'

const Button = ({bgColor, color, icon}) => {
  return (
    <button
    type='button'
    style={{background:bgColor, color}}
    className=" text-2xl opaciy-0.9 p-4 rounded-full hover:drop-shadow-xl">
        {icon}
    </button>
  )
}

export default Button