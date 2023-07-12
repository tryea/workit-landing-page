import Button from '../components/Common/Button/Button'
import './HeadingNavigationSection.css'
import LogoLight from '../assets/images/logo-light.svg'

const HeadingNavigationSection = () => {
    return (
        <header id="header-navigation">
            <div className='header-item'>
                <img src={LogoLight} />
            </div>
            <div className='header-item'>
                <Button type="Secondary" title="Apply for access" />
            </div>
        </header>
    )
}

export default HeadingNavigationSection