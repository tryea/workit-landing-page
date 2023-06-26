import './WelcomeSection.css'

import SectionCallToAction from '../components/SectionCallToAction'
import CallToActionSpiralLeft from '../components/CallToActionSpiralLeft'
import CallToActionSpiralRight from '../components/CallToActionSpiralRight'
import CallToActionPhoneImage from '../components/CallToActionPhoneImage'
import BottomCurveSVG from '../components/BottomCurveSVG'

const WelcomeSection = () => {
    return (
        <div id='welcome-section'>
            <SectionCallToAction />
            <CallToActionSpiralLeft />
            <CallToActionSpiralRight />
            <CallToActionPhoneImage />
            <div className='bottomCurve'>
                <BottomCurveSVG color='#FCF8FF' />
            </div>
        </div>
    )
}

export default WelcomeSection