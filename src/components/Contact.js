import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from './Title'
import { socials } from '../Data/social'

library.add(fab)

export default function Contact() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data => {
    const localURL = "http://localhost:5000/api/sendMail"
    //put prodURL here
    console.log('data: ', data)
    axios.post(localURL, data)
  })

  return (
      <div id="Contact" className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <Title content="Contact me" cssClass="Title--yellow my-5"></Title>

            <p className="contact__content mb-5">Need an expert? You are more than welcome to leave your contact infro and I will be in touch shortly</p>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">
                <div className="col-md-6 pr-md-1">
                  <input type="text"
                    name="name"
                    placeholder="Name"
                    ref={register({ required: "Please fill in your name", minLength: { value: 2, message: "Name should have at least two characters" } })}
                  />
                </div>
                <div className="col-md-6 pl-md-1">
                  <input type="text"
                    name="email"
                    placeholder="Email"
                    ref={register}
                  />
                </div>
              </div>
              <input type="text"
                name="subject"
                placeholder="Subject"
                ref={register}
              />

              <textarea type="text"
                name="message"
                placeholder="Your Message:"
                ref={register}
                rows="5"
              />
              <input type="submit" value="send" className="form__submit" />
              {errors.name && <span>{errors.name.message}</span>}
            </form>
            <div className="social row">
              {socials.map(social => {
                return <a key={social.id} href={social.href} alt={social.alt}>
                  <FontAwesomeIcon
                    className="social__icon"
                    icon={['fab', social.awesome]}
                  // icon={faTwitter}
                  >i</FontAwesomeIcon>
                </a>
              })}
            </div>
          </div>
        </div>
    </div>
  )
}
