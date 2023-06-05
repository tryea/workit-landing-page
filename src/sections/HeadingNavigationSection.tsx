import './HeadingNavigationSection.css'

const HeadingNavigationSection = () => {
    return (
        <header id="header-navigation">
            <div className='logo-wrapper header-item'>
                <img src='/assets/images/logo-light.svg' />
            </div>
            <div className='cta-button header-item'>
                <span className='cta-navigation'>Apply for access</span>
            </div>
        </header>
    )
}

export default HeadingNavigationSection