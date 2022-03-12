import React from 'react'
import { StyledCard } from '../../Styles/Card.styled'

const ProductCard = ({ item }) => {
  return (
    <>
      <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>
        <div className='text'>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
        {/* <div className='=image'>
          <img src={`${item.urlImg}`} alt={`${item.alt}`}/>
        </div> */}

      </StyledCard>
    </>
  )
}

//

export default ProductCard
