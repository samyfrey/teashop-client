import React from 'react'
import { StyledCard } from '../../Styles/Card.styled'

const ProductCard = ({ item }) => {
  console.log(item)
  console.log('the index is', item.id)
  return (
    <>
      <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>

        {/* <li key={index}> */}
        <div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>

        </div>
        <div className='imageSection'>
          <img src={`${item.urlImg}`} alt=''/>
        </div>
        {/* </li> */}

      </StyledCard>
    </>
  )
}

//

export default ProductCard
