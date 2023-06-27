import './FooterSection.css'

const FooterSection = () => {
    return (
        <header id="footer-section">
            <div className='brand-name'>
                <img src='/assets/images/logo-dark.svg' />
            </div>
            <div className='brand-social-media-icon-section'>
                <img src='/assets/icons/icon-facebook.svg' className='social-media-icons' />
                <img src='/assets/icons/icon-instagram.svg' className='social-media-icons' />
                <img src='/assets/icons/icon-twitter.svg' className='social-media-icons' />

            </div>
        </header>
    )
}

export default FooterSection