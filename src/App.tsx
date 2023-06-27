import './App.css'
import FooterSection from './sections/FooterSection'
import FounderIntroductionSection from './sections/FounderIntroductionSection/FounderIntroductionSection'
import HeadingNavigationSection from './sections/HeadingNavigationSection'
import ProductDescriptionSection from './sections/ProductDescriptionSection/ProductDescriptionSection'
import WelcomeSection from './sections/WelcomeSection/WelcomeSection'

function App() {

  return (
    <>
      <HeadingNavigationSection />
      <WelcomeSection />
      <ProductDescriptionSection />
      <FounderIntroductionSection />
      <FooterSection />
    </>
  )
}

export default App
