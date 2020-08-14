import React from 'react'

export default function Logo(props) {
  return (
    <React.Fragment>
      <img className="logo" src={props.src} alt={props.alt}/>
    </React.Fragment>
  )
}
