import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters'
export const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['S', 'r', 'e', 'e', 'r', 'a', 'g']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <div className="cointaner home-page">
      <div className="text-zone">
        <h1>
          Hi , <br /> I'm
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          web developer
        </h1>
        <h2>Frontent developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <form method="get" action="fileName">
        <Link to="/contact" className="flat-button">
        RESUME
        </Link>
        </form>
        <Link to="/projects" className="flat-button">
            PROJECTS
        </Link>
      </div>
    </div>
  )
}
