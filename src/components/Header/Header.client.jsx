import React from 'react'
import {Button,Container, Navbar, Nav, NavDropdown,FloatingLabel,Form} from '../BootstrapIndex'
import { NavbarItems } from '../../Assets/NavbarItems'
import {FaSearch} from "react-icons/fa";
import './Header.css'
const Header = () => {
  return (
    <div className="header">
    <Navbar expand="lg" className="header_nav">
      <Container>
        {/* <Navbar.Brand href="#home">
          <img src={logo} 
          alt=""
          width='102px'        
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        {/* <FloatingLabel
            controlId="floatingInput"
            label="Search Products, categories ..."
            className="d-lg-block d-none "
          >
            <Form.Control type="email" placeholder="name@example.com" size="md"  />
          </FloatingLabel> */}

          <div className="form-floating float_lable_styling d-flex align-items-center">
          {/* <span className="mx-2 position-absolute"><img src={searchImage}></img></span> */}
                <input type="text" className="form-control" placeholder="bla" />
                <label style={{color:"#938c8c"}}>Search Products, categories ...</label>
          </div>

          <Nav className="ms-auto">
            {NavbarItems?.map((NavItem, i) => (
              <React.Fragment key={i}>
                {NavItem?.submenu ? (
                  <>
                    <NavDropdown title={NavItem.title} className="has-megamenu" >
                      <div className="custom">
                        {NavItem?.submenu?.map((subItem, i) => (
                          <React.Fragment key={i}>
                            {subItem?.itemsOfSubMenu ? (
                              <>
                                <NavDropdown
                                  className="has-megamenu"
                                  title={subItem?.title}
                                >
                                  <div className="subCustom">
                                    {subItem?.itemsOfSubMenu?.map(
                                      (itemsOfSubItem, i) => (
                                        <React.Fragment key={i}>
                                          <div className="itemsOfSubItem">
                                            <NavDropdown.Item>
                                              <span>{itemsOfSubItem?.title}</span>
                                            </NavDropdown.Item>
                                            {itemsOfSubItem.items.map(
                                              (item,i) => (
                                                <React.Fragment key={i}>
                                                  <NavDropdown.Item>
                                                    {item?.item}
                                                  </NavDropdown.Item>
                                                </React.Fragment>
                                              )
                                            )}
                                          </div>
                                        </React.Fragment>
                                      )
                                    )}
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
      </Container>
    </Navbar>
    </div>
  )
}

export default Header