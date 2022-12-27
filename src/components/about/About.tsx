import { useState } from 'react'
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters'
import './index.scss'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  return (
    <>
   <div className="container.about-page">
        <div style={{marginLeft:'9%' , marginTop:'10%'}} className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p >
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
      </div>
    </>
  )
}
