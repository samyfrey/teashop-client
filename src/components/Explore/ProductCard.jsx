import React from 'react'
import { StyledCard } from '../../Styles/Card.styled'

const ProductCard = ({ item }) => {
  return (
    <>
      <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>
        <div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>

        </div>
        <div className='imageSection'>
          <img src={`${item.urlImg}`} alt=''/>
        </div>

      </StyledCard>
    </>
  )
}

//

export default ProductCard
