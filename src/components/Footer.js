import React, {useRef} from 'react'
import nezmahLogo from '../Assets/Images/nezmah-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import useSmoothScroll from 'react-smooth-scroll-hook'

export default function Footer() {

  const ref = useRef(document.documentElement)

  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 75,
    direction: 'y'
  })

  return (
    <div className="footer text-center py-3">
      <div className="footer__copy my-3 ml-5">
        <img src={nezmahLogo} alt="Mario Nezmah logo" />
        <p>mario nezmah © <span>2018</span></p>
      </div>
      <button onClick={() => scrollTo('#Home')}>
        <i>
          <FontAwesomeIcon icon={faAngleUp} className="footer__awesome"></FontAwesomeIcon>
        </i>
      </button>
    </div>
  )
}