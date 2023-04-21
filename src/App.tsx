import './App.css'
import SectionInfoProductItem from './components/SectionInfoProductItem';
import { colors } from './util/styles';
import LogoDark from '/assets/images/logo-dark.svg'
import LogoLight from '/assets/images/logo-light.svg'

function App() {
  return (
    <>
      <div className='app'>
        <header
          style={{
            backgroundColor: colors.DarkPurple,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 165px',
            height: '100vh',
          }}
        >
          <div
            className='headerNavigation'
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '1em'
            }}
          >
            <div
              className='headerNavigationItem'

            >
              <img src={LogoLight} style={{
                height: '1em',
                padding: '1.5em'
              }}
              />
            </div>
            <div className='headerNavigationItem'>
              <p style={{ color: colors.White }}>Apply for access</p>
            </div>
          </div>

        </header>
        <div
          className='SectionInfoProduct'
          style={{
            backgroundColor: colors.GhostWhite,
            display: 'flex',
            flexDirection: 'row',
            gap: '25px',
            padding: '0 165px',
            height: '131.5vh',
            alignItems: 'center',
          }}
        >
          <SectionInfoProductItem
            title='Actionable insights'
            description='Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.'
            number='1'
          />
          <SectionInfoProductItem
            title='Data-driven decisions'
            description='Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.'
            number='2'
          />
          <SectionInfoProductItem
            title='Always affordable'
            description='Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.'
            number='3'
          />
        </div>
        <div className='SectionIntroduction'>
          <p>
            Be the first to test

            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
            beta tester for our app and kickstart your company. Apply for access below and I’ll be
            in touch to schedule a call.

            Apply for access
          </p>
        </div>
      </div>
    </>
  )
}

export default App
