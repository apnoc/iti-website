import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import data from '../../sitedata.json';
 
function Footer() {
  return (
   <>
   <section className="footer"> 
   <div className="container">
   <div className="row">
    {
                  data.footer.map((home) => {
                  return( 
                    <>     
                      <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center"> 
                      <Link className='social-logo'>
                          <p >{home.header}</p> 
                          </Link>
                      </div>

                      <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">          
                          <small className='col-xs-12 col-sm-12 col-md-4 '>{home.subheader}</small>
                       </div>

                      <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
                      <div className='social-icons'> 
                     {
                       home.socialLinks.map((details) => {
                         return(
                           <>
                               
                                  <Link
                                  className={details.icon}
                                  to={details.link}
                                  target={details.target}
                                  aria-label={details.arialabel}
                                  >
                                  <i className={details.iconlink} />
                                  </Link>
                              
                           </>
                         )
                       })
                     }
                     </div>
                      </div>

                    </>
                  )})}
    </div>
    </div>
    </section>
</>
  );
}

export default Footer;