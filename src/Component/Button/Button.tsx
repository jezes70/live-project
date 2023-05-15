import React from 'react'

const Button = (props: any) => {
  const ButtonStyles = {
    height: props.height,
    width: props.width,
    backgroundColor: props.backgroundColor
  }
  return (
    <button style={ButtonStyles}>{props.children}</button>
  )
}
export default Button;
