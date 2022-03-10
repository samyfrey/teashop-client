import React from 'react'
import { exploreContent } from '../../content'
import ProductCard from './ProductCard'

const Explore = () => {
  const exploreRender = exploreContent.map((item) => (

    <ProductCard key={item.id} item={item} />

  ))

  return (
    <div>
      {exploreRender}
    </div>
  )
}

export default Explore
