import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Categories from './components/Categories.jsx'
import FeaturedProducts from './components/FeaturedProducts.jsx'
import BrandStory from './components/BrandStory.jsx'
import WhyUs from './components/WhyUs.jsx'
import Specials from './components/Specials.jsx'
import Recipes from './components/Recipes.jsx'
import InstaGrid from './components/InstaGrid.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BrandStory />
        <WhyUs />
        <Specials />
        <Recipes />
        <InstaGrid />
      </main>
      <Footer />
    </>
  )
}
