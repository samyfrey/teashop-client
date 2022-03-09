import React from 'react'
import { exploreContent } from '../../content'
import ProductCard from './ProductCard'

const Explore = () => {
  const exploreRender = exploreContent.map((item) => (
    <ul key={item.id}>
      <ProductCard key={item.id} item={item} />
    </ul>
  ))

  return (
    <div>
      <ul>{exploreRender}</ul>
    </div>
  )
}

export default Explore
