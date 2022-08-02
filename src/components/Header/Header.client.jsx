import React from 'react'
import {Container, Navbar, Nav, NavDropdown,FloatingLabel,Form,Offcanvas,Button,Accordion} from '../BootstrapIndex'
// import './Header.css'
import logo from './../../Assets/Logo.svg'
import user from './../../Assets/user.svg'
import cart from './../../Assets/cart.svg'
import search from './../../Assets/search.svg'
import Hamburger from './../../Assets/Hamburger.svg'
import { useState } from 'react';

const Header = ({menu}) => {
  console.log(menu,"hM")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showBodyCare, setShowBodyCare] = useState(false);

  const handleCloseBodyCare = () => setShowBodyCare(false);
  const handleShowBodyCare = () => setShowBodyCare(true);

  const [showSkinCare, setShowSkinCare] = useState(false);

  const handleCloseSkinCare = () => setShowSkinCare(false);
  const handleShowSkinCare = () => setShowSkinCare(true);

  return (
    <>
          <div className="announcementBar">
      <p>Exclusive! Free Skin Tester worth Rs. 199 with every order</p>
      </div>
    <div className="header-wrape sticky-top d-none d-lg-block">
    <div className="header position-relative">

    <Navbar expand="lg" className="header_nav">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand>
          <img src={logo} alt="Logo" className='me-lg-3' />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">

        <div className="fl_wrapper position-relative">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.66665 14.5C3.89998 14.5 0.833313 11.4334 0.833313 7.66671C0.833313 3.90004 3.89998 0.833374 7.66665 0.833374C11.4333 0.833374 14.5 3.90004 14.5 7.66671C14.5 11.4334 11.4333 14.5 7.66665 14.5ZM7.66665 1.83337C4.44665 1.83337 1.83331 4.45337 1.83331 7.66671C1.83331 10.88 4.44665 13.5 7.66665 13.5C10.8866 13.5 13.5 10.88 13.5 7.66671C13.5 4.45337 10.8866 1.83337 7.66665 1.83337Z" fill="#333333"></path>
        <path d="M14.6667 15.1667C14.54 15.1667 14.4133 15.1201 14.3133 15.0201L11.9999 12.7068C11.8066 12.5135 11.8066 12.1935 11.9999 12.0001C12.1933 11.8068 12.5133 11.8068 12.7066 12.0001L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.0201C14.92 15.1201 14.7933 15.1667 14.6667 15.1667Z" fill="#333333"></path>
         </svg>
        <FloatingLabel
            controlId="floatingInput"
            label="Search Products, categories ..."
            className=""
          >
            <Form.Control type="email" placeholder="name@example.com" size="md"  />
          </FloatingLabel>

          </div>


          <Nav className="ms-auto">
            {menu?.items?.map((NavItem, i) => (
              <React.Fragment key={i}>
                {NavItem?.items.length>1 ? (
                  <>
                    <NavDropdown title={NavItem.title} className={`has-megamenu`}   >
                      <div className="custom">
                        {NavItem?.items?.map((subItem, i) => (
                          <React.Fragment key={i}>
                            {subItem.items.length>1 ? (
                              <>
                                <NavDropdown
                                  className="has-megamenu"
                                  title={`${subItem?.title} `}
                                >
                                
                                  <div className="subCustom">
                                    {console.log("plese work",subItem)}
                                    <div className="sub-wrapper">
                                    {subItem?.items?.map(
                                      (itemsOfSubItem, i) => (
                                        <React.Fragment key={i}>
                                          <div className="itemsOfSubItem">
                                            <NavDropdown.Item>
                                              <span>{itemsOfSubItem?.title}</span>
                                            </NavDropdown.Item>
                                          </div>
                                        </React.Fragment>
                                      )
                                    )}
                                  </div>
                                  </div>
                                  
                                </NavDropdown>
                              </>
                            ) : (
                              <>
                                <NavDropdown.Item className="w-10">
                                  {subItem?.title}
                                </NavDropdown.Item>
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <Nav.Link href="#home">{NavItem?.title}</Nav.Link>

                  </>
                )}
              </React.Fragment>
            ))}

          </Nav>

        </Navbar.Collapse>
        <div className='h-icon d-flex'>
            <img src={search} alt="cart" className='search-icon d-none'/>
            <img src={user} alt="user"/>
            <img src={cart} alt="cart" />
        </div>
      </Container>
    </Navbar>
    </div>
    </div>
    <div className="mobileHeader">

 
       <div className="btn" onClick={handleShow}>
    
    <img src={Hamburger} alt="" />
 
        </div>           
      {/* <Navbar.Toggle onClick={handleShow} /> */}
      {/* <button onClick={handleShow} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span class="navbar-toggler-icon"></span> */}
      {/* <img src={Hamburger} alt="" /> */}
    {/* </button> */} 
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <ul>
              <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
                <ul className='child_ul'>
                  <li>
                <Button variant="primary" onClick={handleShowSkinCare}>
        Skin Care
      </Button>

      <Offcanvas show={showSkinCare} onHide={handleCloseSkinCare} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </li>


      <li>
                <Button variant="primary" onClick={handleShowBodyCare}>
        Skin Care
      </Button>

      <Offcanvas show={showBodyCare} onHide={handleCloseBodyCare} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </li>
                </ul>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul> 

        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  )
}

export default Header