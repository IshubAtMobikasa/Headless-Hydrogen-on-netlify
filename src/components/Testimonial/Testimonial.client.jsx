import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
// import './Testimonial.client.css'
import quote from './../../Assets/quote.webp'
import { Col, Container, Row } from 'react-bootstrap'





const Testimonial = () => {

        const data=[
            {
                id:1,
                message: "Re'equil is the best brand for skin products. I have recently started using products from Re'equil and the results are just amazing. The AHA face wash and the moisturizer is fabulous. The best part of shopping from Re'equil is that they have products based on the issues and their recommendations are so right. For me it's the best brand currently in India!",
                author: "Neemi Tiwari"
            },
            {
                id:2,
                message: "Oh my god! What a great experience I’ve with Re'equil. I am someone who was not confident to use moisturizer & sunscreen because they are way too sticky for my way too oily face. Also, I am someone who has used a lot of brands to see what works for me and I stopped here. I stopped here to never go back.",
                author: "Mridula Tiwari"
            },
            {
                id:3,
                message: "Best customer service and top quality skin care brand i've tried in a very long time. All their products do what they say and an amazing job at that. Finally found a brand worth forever. Thanks for being such an amazing company",
                author: "Versha Diwate"
            }
        ]
    
  return (

        <Container className="page_width">
    <div className="testimonial testimonial_gaping">
        <div className="testimonial_heading">
            <h1>87.2% customers rate<br/>us 4 stars and above</h1>
        </div>
        <img src={quote} className="d-block m-auto pb-2" alt="quote" />
        <ReactElasticCarousel>
            {
                data.map((d)=>(
                    <div className="testimonial_container" key={d.id}>
                        <p>{d.message}</p>
                        <h5>{d.author}</h5>
                    </div>
                ))
            }
        </ReactElasticCarousel>
        </div>
        </Container>
  )
}

export default Testimonial