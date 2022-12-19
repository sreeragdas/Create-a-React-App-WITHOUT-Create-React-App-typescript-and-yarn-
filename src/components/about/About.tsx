import { useState } from 'react';
import { AnimatedLetters } from '../animatedLetters/AnimatedLetters';
import './index.scss'
export const About: React.FC = () => {
    const [letterClass , setLetterClass]=useState('text-animate');
    const aboutArray=['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];
    return(
        <div className='container about-page'>
            <div className='text-zone'>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
            </div>

        </div>
    );
}