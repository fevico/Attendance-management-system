import React from 'react'

const Button = ({onClick, style, text, icon}) => {
  return (
    <button className={`flex items-center justify-center rounded ${style}`} onClick={onClick}>
        {text} {icon}
    </button>
  )
}

export default Button
