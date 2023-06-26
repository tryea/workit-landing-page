import './App.css'
import FounderIntroductionSection from './sections/FounderIntroductionSection'
import HeadingNavigationSection from './sections/HeadingNavigationSection'
import ProductDescriptionSection from './sections/ProductDescriptionSection'
import WelcomeSection from './sections/WelcomeSection'

function App() {

  return (
    <>
      <HeadingNavigationSection />
      <WelcomeSection />
      <ProductDescriptionSection />
      <FounderIntroductionSection />
    </>
  )
}

export default App
