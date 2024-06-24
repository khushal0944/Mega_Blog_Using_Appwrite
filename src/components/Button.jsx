import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "bg-white",
    className = '',
    ...props
}) {
  return (
    <button type={type} className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-lg`} {...props}>{children}</button>
  )
}

export default Button