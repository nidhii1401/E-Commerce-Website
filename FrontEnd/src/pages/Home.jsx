import React from 'react'
import Hero from '../components/Layout/Hero'
import Collection from '../components/Products/Collection'
import NewItems from '../components/Products/NewItems'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Collection/>
        <NewItems/>
    </div>
  )
}

export default Home