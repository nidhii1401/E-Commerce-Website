import React from 'react'
import Hero from '../components/Layout/Hero'
import Collection from '../components/Products/Collection'
import NewItems from '../components/Products/NewItems'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import Feature from '../components/Products/Feature'

const placeHolderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=11",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=21",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=31",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=41",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=55",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=65",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=73",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=83",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=73",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=86",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=72",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=81",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=71",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=88",
        altText: "Stylish Jacket 2",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500?random=70",
        altText: "Stylish Jacket 1",
      },

      {
        url: "https://picsum.photos/500?random=89",
        altText: "Stylish Jacket 2",
      },
    ],
  },
];


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

        {/* top wears for women */}
        <div className="container mx-auto">
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wear for Women
          </h2>
          <ProductGrid products={placeHolderProducts}/>
        </div>

        <Feature/>
        
    </div>
  )
}

export default Home