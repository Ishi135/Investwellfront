import React from 'react'
import "../../media/css/style.css"

const Toast = ({message}) => {
  return (
    <div className="toast-container">
        <div className='toast'>{message}</div>
    </div>
  )
}

export default Toast;