import { Image } from '@shopify/hydrogen'
import React from 'react'
import {Container,Row,Col} from './../BootstrapIndex'
// import './MidBanner.client.css'


const MidBanner = ({banner}) => {
    console.log(banner,"show banner")
  return (
    <Container>

    <div className="midBanner">
        <Image className='midBanner_img' src={banner.featuredImage.url} alt={`banner.featuredImage.altText`} width="100" height={100}></Image>
        <div className="midBanner_caption">
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
            <button className='mt-3'>Take our quiz</button>
        </div>
    </div>

    </Container>
  )
}

export default MidBanner