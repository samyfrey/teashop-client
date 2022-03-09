import React from 'react'
import { exploreContent } from '../../content'
import Product from './Product'

const Explore = () => {
  const exploreRender = exploreContent.map((item, index) => (
    <Product key={index} item={item} />
  ))

  return (
    <div>
      <ul>{exploreRender}</ul>
    </div>
  )
}

export default Explore
