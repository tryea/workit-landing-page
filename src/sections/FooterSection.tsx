import './FooterSection.css'
import FacebookIcon from '../assets/icons/icon-facebook.svg'
import InstagramIcon from '../assets/icons/icon-instagram.svg'
import TwitterIcon from '../assets/icons/icon-twitter.svg'
import LogoDark from '../assets/images/logo-dark.svg'

const FooterSection = () => {
    return (
        <footer id="footer-section">
            <div className='brand-name'>
                <img src={LogoDark} />
            </div>
            <div className='brand-social-media-icon-section'>
                <img src={FacebookIcon} className='social-media-icons' />
                <img src={InstagramIcon} className='social-media-icons' />
                <img src={TwitterIcon} className='social-media-icons' />

            </div>
        </footer>
    )
}

export default FooterSection