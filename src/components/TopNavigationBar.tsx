
import { colors } from '../util/styles'
import LogoDark from '/assets/images/logo-dark.svg'
import LogoLight from '/assets/images/logo-light.svg'

const TopNavigationBar = () => {
    return (
        <div
            className='headerNavigation'
            style={{
                display: 'flex',
                flex: 1,
                alignItems: 'flex-end',
                flexDirection: 'row',
                height: '90px',
                maxHeight: '90px',
                justifyContent: 'space-between',
            }}
        >
            <div
                className='headerNavigationItem'
                style={{
                }}
            >
                <img src={LogoLight} style={{
                    height: '26px',
                }}
                />
            </div>
            <div className='headerNavigationItem'>
                <p style={{
                    color: colors.White,
                    fontSize: '18px',
                    letterSpacing: '-0.18px',
                    fontFamily: 'Manrope-VariableFontWeight',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textDecorationColor: colors.Eucaplyptus,
                    textDecorationStyle: 'solid',
                    textUnderlineOffset: '0.5em',
                    textDecorationThickness: '3px'
                }}>Apply for access</p>
            </div>
        </div>
    )
}

export default TopNavigationBar