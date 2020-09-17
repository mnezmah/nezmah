import React from 'react'

export default function Title(props) {
  return (
    <React.Fragment>
      <h1 className={'Title' + ' ' + props.cssClass}>{props.content}</h1>
    </React.Fragment>
  )
}
