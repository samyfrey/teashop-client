import React from 'react'
const Product = ({ item, index }) => {
  console.log(item)
  return (
    <>
      <li key={index}>
        <h1>{item.title}</h1>
        <p>{item.text}</p>
        <img src={`${item.urlImg}`} alt=''/>
      </li>
    </>
  )
}

//

export default Product
