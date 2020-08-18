import React from 'react'
import Title from './Title'

export default function Contact() {
  return (
    <div id="Contact">
      <Title content="Contact me" cssClass="Title--yellow"></Title>

      <p className="contact__content">Need an expert? You are more than welcome to leave your contact infro and I will be in touch shortly</p>
      <form action="">

        <input type="text" name="name" placeholder="Name"/>

        <input type="text" name="email" placeholder="email"/>
        <textarea type="text" name="message" placeholder="Your message..."/>


      </form>
    </div>
  )
}
