import React from 'react'
import './Card.css'

export default props =>
  <div className="Card">
    <div className="Title">
      {props.Title}
    </div>
    <div className="Content">
      {props.children}
    </div>
  </div>