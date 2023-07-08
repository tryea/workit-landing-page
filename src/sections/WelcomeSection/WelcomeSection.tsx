import './WelcomeSection.css'

import SectionCallToAction from './slice/SectionCallToAction'
import CallToActionSpiralLeft from './slice/CallToActionSpiralLeft'
import CallToActionSpiralRight from './slice/CallToActionSpiralRight'
import CallToActionPhoneImage from './slice/CallToActionPhoneImage'
import BottomCurveSVG from '../../components/BottomCurveSVG'

const WelcomeSection = () => {
    return (
        <div id='welcome-section'>
            <SectionCallToAction />
            <CallToActionSpiralLeft />
            <CallToActionSpiralRight />
            <CallToActionPhoneImage />
            <BottomCurveSVG className='bottomCurve' color='#FCF8FF' />
        </div>
    )
}

export default WelcomeSection