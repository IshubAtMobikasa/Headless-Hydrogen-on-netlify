import { Image } from '@shopify/hydrogen'
import React from 'react'
import {Container} from './../BootstrapIndex'
import './HeroSlider.client.css'


const HeroSlider = ({banner}) => {
  return (
    <div>
<Container>
{
banner.heroBanners.nodes.map((b)=>(
<>
<div className='text-block py-5'>
<h1 className='main-heading'>
  {  b.title }
</h1>
<p className='subtitle'>
{b.descriptionHtml}
</p>
</div>
<div className="img-container">
<Image src={b.image.url} height="400" width={`100%`} alt="data"></Image>
</div>
</>
))
}

<button className='button--primary mt-4 mb-5'>Shop Now</button>
</Container>
    </div>
  )
}

export default HeroSlider