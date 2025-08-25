import React from 'react'
import HeroBanner from '../components/HeroBanner'
import ShopDetailsServices from '../components/Services'
import Products from '../components/Products'
import ProductId from '../components/ProductId'
import Revu from '../components/revu'


const ShopDetailsThemplate = () => {




  return (
    <div>
      <HeroBanner />
      <ProductId />
      <Revu />
      <Products />
      <ShopDetailsServices />

    </div>
  )
}

export default ShopDetailsThemplate
