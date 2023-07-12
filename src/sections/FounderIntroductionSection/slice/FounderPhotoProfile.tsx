import Button from '../../../components/Common/Button/Button'
import './FounderPhotoProfile.css'

import FounderPhoto from '../../../assets/images/image-founder.webp'
import SpiralLeft from '../../../assets/images/spiral-left.svg'

const FounderPhotoProfile = () => {
    return (
        <div className="founderPhotoProfileWrapper">
            <img src={FounderPhoto} className="founderPhotoProfileImage" alt="Founder Photo Profile" />
            <div className='founderQuote'>
                <h1>Be the first to test</h1>
                <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
                <Button type='Primary' title='Apply for access' />
                <div className='founderQuoteSpiralLeft'>
                    <img src={SpiralLeft} alt="spiral-left" />
                </div>
            </div>

        </div>
    )
}

export default FounderPhotoProfile