import Button from '../components/Common/Button/Button'
import './HeadingNavigationSection.css'

const HeadingNavigationSection = () => {
    return (
        <header id="header-navigation">
            <div className='header-item'>
                <img src='/assets/images/logo-light.svg' />
            </div>
            <div className='header-item'>
                <Button type="Secondary" title="Apply for access" />
            </div>
        </header>
    )
}

export default HeadingNavigationSection