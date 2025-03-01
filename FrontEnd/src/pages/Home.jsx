import React from 'react'
import Hero from '../components/Layout/Hero'
import Collection from '../components/Products/Collection'
import NewItems from '../components/Products/NewItems'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Collection/>
        <NewItems/>

        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Best Seller
        </h2>
        <ProductDetails/>
        
    </div>
  )
}

export default Home