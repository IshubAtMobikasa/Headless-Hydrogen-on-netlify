import React from 'react'
import './Footer.client.css'
import { FloatingLabel,Form } from 'react-bootstrap'
import BottomBar from './BottomBar/BottomBar'

const Footer = ({menu}) => {
    console.log(menu)
    const bottomBarData=[
        
        {id:1,text:"Privacy Policy | Terms of Service",bgColor:"#ECECEC"},
        {id:2,text:"© Re’equil. 2022. All Rights Reserved.",bgColor:"white"}

    ]
  return (
    <>
    <div className='footer d-flex justify-content-between'>
        <div className="f-menu-wrapper d-flex justify-content-start pt-5">
            {
                menu.items.map((item)=>(
                    <div className="menu p-3">
                        <h5 className="menu-title">
                            {item.title}
                        </h5>
                        <ul>
                            {
                                item.items.map((subItem)=>(
                                    <li><a href='#'>{subItem.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <div className="newsletter">
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
    {
        bottomBarData.map((data)=>(
            <React.Fragment key={data.id}>
                <BottomBar text={data.text} bgColor={data.bgColor}></BottomBar>
            </React.Fragment>
        ))
    }
    </>
  )
}

export default Footer