import React from 'react'
// import './Footer.client.css'
import { Container, FloatingLabel,Form, Row,Col } from 'react-bootstrap'
import BottomBar from './BottomBar/BottomBar'

const Footer = ({menu}) => {
    console.log(menu)
    const bottomBarData=[
        
        {id:1,text:"Privacy Policy | Terms of Service",bgColor:"#ECECEC"},
        {id:2,text:"© Re’equil. 2022. All Rights Reserved.",bgColor:"white"}

    ]
  return (
    <>
    <Container fluid className='p-0'>

    <div className='footer d-flex justify-content-between flex-wrap'>
        <div className="f-menu-wrapper d-flex justify-content-start pt-5">
            {
                menu.items.map((item)=>(
                    <div className="menu p-xl-3" key={item.id}>
                        <h5 className="menu-title">
                            {item.title}
                        </h5>
                        <ul>
                            {
                                item.items.map((subItem)=>(
                                    <li key={subItem.id}><a href='#'>{subItem.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <div className="newsletter">
            <div className="newsletter_wrapper">
            <h3>Become a Re’equil insider</h3>
            <p>Get access to research, guides, and insider sale events</p>
            <div className="input_wrapper position-relative">
            <FloatingLabel controlId="floatingInputGrid" label="Your Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <button className='over_input'>Subscribe</button>
        </div>
        </div>
        </div>
    </div>
    {
        bottomBarData.map((data)=>(
            <React.Fragment key={data.id}>
                <BottomBar text={data.text} bgColor={data.bgColor}></BottomBar>
            </React.Fragment>
        ))
    }
    </Container>
    </>
  )
}

export default Footer