import Button from '../../../components/Common/Button/Button'
import { colors } from '../../../util/styles'
import './SectionCallToAction.css'

const SectionCallToAction = () => {
    return (
        <div id='section-call-to-action'>
            <div className="welcome-text-wrapper">
                <h1 className="heading-large">Data</h1>
                <h1 className='heading-large text-underline'>tailored</h1>
                <h1 className="heading-large">to</h1>
                <h1 className="heading-large">your</h1>
                <h1 className="heading-large">needs.</h1>
            </div>
            <div className='cta-button' >
                <Button title='Learn more' type='Primary' />
            </div>
        </div>
    )
}

export default SectionCallToAction