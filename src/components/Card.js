import React from 'react'

export default function Card(props) {
  return (
    <div className=" col-12 col-sm-6 col-md-3 card mt-5 mx-3 text-center">
      <a href={props.href} target="_blank" rel='noopener noreferrer'>
          <img src={props.src}
               alt={props.alt}
               className="card__img"
          >
          </img>
      </a>
      <h3 className="card__title py-4 mt-3">
        <a href={props.href}>{props.title}</a>
      </h3>
      <span className="separator separator--card py-4"> </span>
      <p className="card__content">{props.description}</p>
    </div>
  )
}
