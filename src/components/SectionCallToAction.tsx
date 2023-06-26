import { colors } from "../util/styles"
import './SectionCallToAction.css'

const SectionCallToAction = () => {
    return (
        <div id='section-call-to-action'>
            <div className="welcome-text-wrapper">
                <h1 className="heading-large">Data</h1>
                <h1 className='heading-large text-underline'>tailored</h1>
                <h1 className="heading-large">to</h1>
            </div>
            <div className="welcome-text-wrapper">
                <h1 className="heading-large">your</h1>
                <h1 className="heading-large">needs.</h1>
            </div>
            <div
                style={{
                    marginTop: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
            >
                <button
                    style={{
                        backgroundColor: colors.Eucaplyptus,
                        height: '61px',
                        width: '161px',
                        borderRadius: 0
                    }}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default SectionCallToAction