import { Image } from '@shopify/hydrogen'
import React from 'react'
import {Container} from './../BootstrapIndex'
// import './Charity.client.css'

const Charity = ({product}) => {
    console.log(product,"show product")
  return (
    <Container>
    <div className="Charity">
        <Image className='Charity_img' src={product.featuredImage.url} alt={`product.featuredImage.altText`} width="100" height={100}></Image>
        <div className="Charity_caption">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button className='mt-3'>Read More</button>
        </div>
    </div>

    </Container>
  )
}

export default Charity