import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from './Title'
import { socials } from '../Data/social'

library.add(fab)

export default function Contact() {

  const [message, setMessage] = useState('')
  const localURL = "http://localhost:5000/api/sendMail"
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })
  const onSubmit = (data => {
    async function makePostRequest() {
      console.log('data: ', data)
      let res = await axios.post(localURL, data)
      console.log(`Status code: ${res.status}`);
      console.log(`Status text: ${res.statusText}`);
      console.log(`Request method: ${res.request.method}`);
      console.log(`Path: ${res.request.path}`);

      console.log(`Date: ${res.headers.date}`);
      console.log(`Data: ${res.data}`);
    }

    makePostRequest()
    reset()
    setMessage("Thank you for your message. You will be contacted shortly 😄")
    setTimeout(function () { setMessage('') }, 5000)
    console.log(message)
  })

  return (
    <div id="Contact" className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <Title content="Contact me" cssClass="Title--yellow my-5"></Title>

          <p className="contact__content mb-5">Need an expert? You are more than welcome to leave your contact info and I will be in touch shortly</p>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className="col-md-6 pr-md-1">
                <input className={errors.name ? 'input__margin' : ''}
                  name="name"
                  placeholder="Name"
                  ref={register({ required: "Please fill in your Name.", minLength: { value: 2, message: "Name should have at least two characters" } })}
                />
                {errors.name && <span className="form__msg">{errors.name.message}</span>}
              </div>
              <div className="col-md-6 pl-md-1">
                <input className={errors.email ? 'input__margin' : ''}
                  type="text"
                  name="email"
                  placeholder="Email"
                  ref={register({
                    required: "Please fill in your Email.",
                    pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Please enter correct Email" },
                  })}
                />
                {errors.email && <span className="form__msg">{errors.email.message}</span>}
              </div>
            </div>
            <input className={errors.subject ? 'input__margin' : ''}
              type="text"
              name="subject"
              placeholder="Subject"
              ref={register({
                required: "Please fill in the Subject."
              })}
            />
            {errors.subject && <span className="form__msg">{errors.subject.message}</span>}
            <textarea className={errors.message ? 'input__margin' : ''}
              type="text"
              name="message"
              placeholder="Your Message:"
              ref={register({
                required: "Type in your message, please."
              })}
              rows="5"
            />
            {errors.message && <span className="form__msg">{errors.message.message}</span>}
            <input type="submit" value="send" className="form__submit" />
            <span className=" form__msg form__msg--clear">{message}</span>
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
