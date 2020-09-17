import React from 'react'

export default function Card(props) {
  return (
    <div className="card col-11 col-sm-6 col-md-4 col-lg-3 mt-5 mx-3 text-center">
      <a href={props.href} target="_blank" rel='noopener noreferrer'>
          <img src={props.src}
               alt={props.alt}
               className="card__img"
          >
          </img>
      </a>
      <h3 className="card__title py-3 py-md-4 mt-3">
        <a href={props.href}>{props.title}</a>
      </h3>
      <span className="separator separator--card py-2 py-md-4"> </span>
      <p className="card__content">{props.description}</p>
    </div>
  )
}
