import React from 'react'
import { Card, Container,Row,Col } from './../BootstrapIndex'
import ReactElasticCarousel,{consts} from 'react-elastic-carousel'
import LeftAngle from './../../Assets/left_arrow.png'
import RightAngle from './../../Assets/right_arrow.png'
import { Image } from '@shopify/hydrogen'
// import './BestSeller.client.css'

const BestSeller = ({products}) => {
    console.log(products,"best seller")
    const myArrow = ({type,onClick, isEdge}) => {
        const pointer = type === consts.PREV ? <img src={LeftAngle}/> : <img src={RightAngle}/>
        return(
            <button className="arrows" onClick={onClick} disabled={isEdge}>{pointer}</button>
        )
      }
      const breakPoints = [ 
        {width:576,itemsToShow:1},
        {width:576,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1024,itemsToShow:3},
       
      ]
  return (
    <div className='gaping'>
        <Container className="page_width">
        <div className="best_seller">
            <div className="best_seller_text">
                <h1>{products.title}</h1>
                <p>{products.description}</p>
            </div>
            <div className="best_seller_slider">
                <ReactElasticCarousel breakPoints={breakPoints}  renderArrow={myArrow} itemsToScroll={1} itemsToShow={3} itemPadding={[0,0]} className="pt-5" >
                    {products.products.nodes.map((product)=>(
                        <div className='slider_container' key={product.id}>
                            {
                                console.log(product.options[0].values[0],"check this")
                            }
                            <Col className="mx-2">
                            <Card className="border-0">  
                                <Image src={product.featuredImage.url} alt={`product.featuredImage.altText`} height="100" width="100" className="card-img img-fluid"></Image> 
                                <Card.Body>
                                    <h4>
                                        {product.title}
                                    </h4>
                                    <div className="pricing d-flex justify-content-center align-items-center">
                                        <span className="mx-1 text-decoration-line-through">{product.priceRange.maxVariantPrice.amount}</span>
                                        <h3 className='m-0 mx-1 p-0'> ₹  {product.priceRange.minVariantPrice.amount}</h3> | <span className='mx-1 product_value'>( { product.options[0].values[0] } )</span>
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        </div>
                    ))}
                </ReactElasticCarousel>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default BestSeller