import React from 'react'
import ReactElasticCarousel,{consts} from 'react-elastic-carousel'
import { Col,Card } from '../../../BootstrapIndex'
// import './SliderComponent.css'
import LeftAngle from './../../../../Assets/left_arrow.png'
import RightAngle from './../../../../Assets/right_arrow.png'

const SliderComponent = ({product}) => {
  
  // console.log(product.products,"from slider")
  // const {products}=product
  // const {nodes:productArr} = products
  // console.log(productArr,"workijg fine")

  const myArrow = ({type,onClick, isEdge}) => {
    const pointer = type === consts.PREV ? <img src={LeftAngle}/> : <img src={RightAngle}/>
    return(
        <button className="arrows" onClick={onClick} disabled={isEdge}>{pointer}</button>
    )
  }
  const breakPoints = [ 
    {width:576,itemsToShow:1},
    {width:768,itemsToShow:2},
    {width:1024,itemsToShow:3},
   
  ]
  return (
    <div>
      <ReactElasticCarousel breakPoints={breakPoints} renderArrow={myArrow} itemsToScroll={1} itemsToShow={3} itemPadding={[0,0]} className="pt-5">
        {
          product.products.nodes.map((product) => (
            <div className="col_style" key={product.id}>
                  <Card className='border-0'>
                  <div className="add_to_cart_btn">
                      <button className="cart_btn">
                        Add To Cart
                      </button>
                    </div>
                    <div className="card_img">
                    <Card.Img
                      src={product.featuredImage.url}
                      style={{height: '322px'}}
                    />
                    </div>
                    <Card.Body style={{height:'73px'}}>
                      <span>{product.title}</span>
                    </Card.Body>
                   
                  </Card>
                </div>
          ))
        }
        </ReactElasticCarousel>
    </div>

  )
}

export default SliderComponent