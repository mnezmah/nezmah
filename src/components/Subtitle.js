import React from 'react'

export default function Subtitle(props) {
  return (
    <React.Fragment>
      <h5 className={'subtitle py-4' + ' ' + props.cssClass}>{props.content}</h5>
    </React.Fragment>
  )
}
