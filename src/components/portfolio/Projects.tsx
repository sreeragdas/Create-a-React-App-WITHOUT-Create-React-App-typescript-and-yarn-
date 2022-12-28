import { useState } from "react";
import { AnimatedLetters } from "../animatedLetters/AnimatedLetters";

export const Projects: React.FC = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
              <h1>
                  <AnimatedLetters  letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']} idx={15} />
              </h1>
         
            <div className="contact-form">
       
  
            </div>
            </div>
  
        </div>
        </>
      );
}