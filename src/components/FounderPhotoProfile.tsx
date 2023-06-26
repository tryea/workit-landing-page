import './FounderPhotoProfile.css'

const FounderPhotoProfile = () => {
    return (
        <div className="founderPhotoProfileWrapper">
            <img src="/assets/images/image-founder.webp" className="founderPhotoProfileImage" alt="Founder Photo Profile" />
            <div className='founderQuote'>
                <h1>Be the first to test</h1>
                <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I'll be in touch to schedule a call.</p>
                <button type='button'>Apply for access</button>
            </div>
        </div>
    )
}

export default FounderPhotoProfile