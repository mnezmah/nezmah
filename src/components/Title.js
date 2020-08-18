import React from 'react'

export default function Title(props) {
  return (
    <React.Fragment>
      <h1 className={`Title py-3 ${props.cssClass}`}>{props.content}</h1>
    </React.Fragment>
  )
}
