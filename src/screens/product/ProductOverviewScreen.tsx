import React from 'react'
import NavBar from '../../components/NavBar'
import ProductModelsComponent from './components/ProductModelsComponent'
import PricingComponent from '../home/components/PricingComponent'
import PricingComparisonComponent from './components/PricingComparisonComponent'
import PlansDetailsComponent from './components/PlansDetailsComponent'
import HowItWorksComponent from '../../components/HowItWorksComponent'
import FAQComponent from '../../components/FAQComponent'
import FooterComponent from '../../components/FooterComponent'

const ProductOverviewScreen: React.FC = () => {
  return (
    <section>
        <NavBar />
        <ProductModelsComponent />
        <PricingComponent />
        <PricingComparisonComponent />
        <PlansDetailsComponent />
        <HowItWorksComponent />
        <FAQComponent />
        <FooterComponent />
    </section>
  )
}

export default ProductOverviewScreen