import React from 'react';
import data from '../../sitedata.json';
import {Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import './Header.css';
import {Link} from 'react-router-dom'



function Header() {
 return ( 
  <>
   <div className="Header__Section" > 
   <section>
      {
                 data.Header.map((home) => {
                 return( 
                   <>     
                     <section  className="d-sm-none ">
 
                  <div > 
                    {
                      home.description.map((details) => {
                        return(
                          <>
                           <div className="selected ">
                              <h5 style={{fontSize: "4.5vw"}} >{details.title}</h5>                             
                          </div>
                          </>
                        )
                      })
                    }
                    </div>
                    
                    </section>
                      <section  className="d-none d-sm-block m-3"> 
                      <div className="box ">
                        <div>
                          {
                                home.img1.map((details) => {
                                  return(
                                    <>
                                    <img src={details.imgsrc} className="d-none img-fluid d-sm-block" alt={details.imgalt} /> 
                                    </>
                                  )
                                })
                              }
                        </div>
                        <div>
                            {
                              home.description.map((details) => {
                                return(
                                  <>
                                  <div className="selected ">
                                      <h5 style={{fontSize: "1.5vw"}} >{details.title}</h5>                             
                                  </div>
                                  </>
                                )
                              })
                            }
                        </div>

                        <div>
                        {
                              home.img2.map((details) => {
                                return(
                                  <>
                                  <img src={details.imgsrc} className="d-none img-fluid d-sm-block" alt={details.imgalt} /> 
                                  </>
                                )
                              })
                            }
                        </div>

                      </div>
                      </section>                   
                   </>
                 )})}
   
   </section>
   <section>
   <Navbar className="navbar" expand="lg" >
 <div className="container-fluid px-5">
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav " >
 <Nav className="nav-item mr-auto">
 <Nav.Link > <Link to='/home' className="link" > Home </Link></Nav.Link> 
 <Nav.Link >  <Link to='/about'  className="link" > About Us </Link></Nav.Link> 
 <Nav.Link > <Link to='/trades' className="link" > Trades</Link></Nav.Link> 
 <Nav.Link> <Link to='/schemes'  className="link" > Schemes of IT</Link></Nav.Link>
 <NavDropdown title="ITI Profile" >
 <NavDropdown.Item ><Link to='./pvt'>Pvt ITIs</Link></NavDropdown.Item>
 <NavDropdown.Item > <Link to='/gvt' > Gvt Trades</Link> </NavDropdown.Item>
 </NavDropdown>
 <Nav.Link ><Link to ='./contact'  className="link">Contact Us</Link></Nav.Link> 
 </Nav>
 <Nav className="nav-item  ">
 <Dropdown className="mx-5" >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <i className="fa fa-user" />
  </Dropdown.Toggle>

  <Dropdown.Menu className="mr-5">
    <Dropdown.Item  ><img src = "/images/student_login.png"  className="img-fluid  " alt=""
                          /> <Link to='./studentLogin'   style={{color: "black"}}>Student Login</Link></Dropdown.Item>
    <Dropdown.Item  > <img src = "/images/employee_login.png"  className="img-fluid " alt=""
                          /><Link to='./employeeLogin'   style={{color: "black"}}>Employee Login</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Nav>
 </Navbar.Collapse>
 </div>
 </Navbar> 
 
  </section>
   </div>
  
</>);
}

 
export default Header;

