import './WelcomeSection.css'

import SectionCallToAction from '../components/SectionCallToAction'
import CallToActionSpiralLeft from '../components/CallToActionSpiralLeft'
import CallToActionSpiralRight from '../components/CallToActionSpiralRight'
import CallToActionPhoneImage from '../components/CallToActionPhoneImage'

const WelcomeSection = () => {
    return (
        <div id='welcome-section'>
            <SectionCallToAction />
            <CallToActionSpiralLeft />
            <CallToActionSpiralRight />
            {/* <CallToActionPhoneImage /> */}
        </div>
    )
}

export default WelcomeSection