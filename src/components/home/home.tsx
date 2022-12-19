import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
export const Home: React.FC = () => {
    return(<div className='cointaner home-page'>
        <div className='text-zone'>
            <h1>Hi , <br/> I'm
            <img src={LogoTitle} alt="develoer" />
            Sreerag
            <br />
            web developer
            </h1>
            <h2>Frontent developer / Javascript Expert</h2>
            <Link to="/contact" className='flat-button' >CONTACT ME</Link>


        </div>
    </div>);
}