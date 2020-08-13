import React from 'react'

export default function Subtitle(props) {
  return (
    <React.Fragment>
      <h5 className="subtitle">{props.content}</h5>
    </React.Fragment>
  )
}
