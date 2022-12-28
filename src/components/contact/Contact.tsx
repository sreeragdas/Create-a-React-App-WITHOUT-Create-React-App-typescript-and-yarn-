import { AnimatedLetters } from "../animatedLetters/AnimatedLetters";
import './index.scss';
export const Contact: React.FC = () => {
    return(
      <>
      <div className="container contact-page">
          <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={""} strArray={['C','o','n','t','a','c','t',' ' ,'M','e']} idx={15} />
            </h1>
            <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div className="contact-form">
              <form>
                  <ul>
                      <li className="half">
                          <input type="text" name="name"  placeholder="Name" required />
                      </li>
                      <li className="half">
                          <input type="text" name="email"  placeholder="Email" required />
                      </li>
                      <li>
                          <input placeholder="Subject" type="text" name="subject" required />
                      </li>
                      <li>
                          <textarea placeholder="message" name="message" required />
                      </li>
                      <li>
                          <input type="submit" className="flat-button" value="SEND" />
                      </li>
                  </ul>
              </form>

          </div>
          </div>

      </div>
      </>
    );
}