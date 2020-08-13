import React from 'react'

export default function Subtitle(props) {
  return (
    <React.Fragment>
      <h5 className="subtitle p-3">{props.content}</h5>
    </React.Fragment>
  )
}
