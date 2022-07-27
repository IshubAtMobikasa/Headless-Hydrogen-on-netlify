import React from 'react'
import {Button,Container, Navbar, Nav, NavDropdown,FloatingLabel,Form} from '../BootstrapIndex'
import { NavbarItems } from '../../Assets/NavbarItems'
import {FaSearch} from "react-icons/fa";
// import './Header.css'
import logo from './../../Assets/Logo.svg'
import user from './../../Assets/user.svg'
import cart from './../../Assets/cart.svg'
const Header = ({menu}) => {
  console.log(menu,"hM")
  return (
    <div className="header">
      <div className="announcementBar">
      <p>Exclusive! Free Skin Tester worth Rs. 199 with every order</p>
      </div>
    <Navbar expand="lg" className="header_nav" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" className='me-3' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                    <NavDropdown title={NavItem.title} className="has-megamenu" >
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
                                              <span>{`${itemsOfSubItem?.title} x`}</span>
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
            <Nav.Link href="#home" className="d-lg-block d-none"><img src={user} alt="user"/></Nav.Link>
            <Nav.Link href="#home" className="d-lg-block d-none"><img src={cart} alt="cart" /></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header