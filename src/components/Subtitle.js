import React from 'react'

export default function Subtitle(props) {
  return (
    <React.Fragment>
      <h5 className="subtitle pl-5 py-4">{props.content}</h5>
    </React.Fragment>
  )
}
