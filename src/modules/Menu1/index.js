import React from 'react' ;
import './home.css';
import './card.css';
import data from '../../sitedata.json';
import {Carousel} from 'react-bootstrap';



function Home() {
        return (
          <>
          {
            data.menu1.map((home) => {
            return(      
                  <>
                  <section>
                  {
                            home.section1.map((e)=> {
                              return(
                                <>
                                   <section className="testimonials"> 
                                          <Carousel >
                                              <Carousel.Item interval={1000}>
                                                {
                                                  e.carousel1.map((details)=> {
                                                    return(
                                                      <>
                                                        <img  className="d-block w-100" src={details.img} alt={details.imgalt} />
                                                      </>
                                                    )
                                                  
                                                  })
                                                }
                                                  
                                              </Carousel.Item>
                                              <Carousel.Item interval={1000}>
                                                {
                                                  e.carousel2.map((details)=> {
                                                    return(
                                                      <>
                                                        <img  className="d-block w-100" src={details.img} alt={details.imgalt} />
                                                      </>
                                                    )
                                                  
                                                  })
                                                }                                                  
                                              </Carousel.Item>
                                              
                                    </Carousel>
                                </section> 
                                </>
                              )})}
                  </section>
                                             
              <section>
               
                          {
                            home.section2.map((details)=> {
                              return(
                                <>
                                <section>
                                   <div className="notification p-3 ">
                                      <marquee behaviour="alternate" scrolldelay="140"><h5>{details.notification}</h5></marquee>
                                  </div>
                                </section>

                                <section className="header__section" >
                                    <section className="container" > 
                                      <h3 className="text-center p-5">{details.title}</h3>
                                      <div className="row">
                                        <section className="col-lg-8 p-4">
                                            <p className="text-justify">{details.paragraph}</p>
                                            {/* <a href={details.button_link} className="btn btn-success">{details.button}</a> */}
                                            </section>
                                            <section  className="images col-lg-4 p-4">
                                                <img className="img-thumbnail float-left d-none  d-sm-block" alt ="" src={details.imgsrc}/>
                                         </section>
                                       </div>
                                    </section> 
                                  </section>
                                </>
                              )
                            })
                          }  

                <section className="testimonials articles"> 
                              <Carousel className="container d-flex justify-content-center" >
                                  <Carousel.Item  interval={1000}>
                                  {
                            home.section3.map((details)=> {
                              return(
                                <>
                                
                                      <section className=" py-5">
                                        {/* <h3 className="text-center">{details.title}</h3> */}
                                        <div className="container d-flex justify-content-center">
                                                      <div className="row">
                                        {
                                          details.card1.map((e)=> {
                                            return(
                                              <>                                                 
                                                  <div className="col-xs-12 col-sm-6 col-md-4 p-2">
                                                  <div className="card text-center">
                                                            <div className="overflow">
                                                              <img src={e.imgsrc} alt= {e.imgalt} className="card-img-top" />
                                                            </div>
                                                            <div className= "card-body text-dark">
                                                              <h4 className= "card-title"> {e.title}</h4>
                                                              <p className="card-text text-secondary text-justify ">{e.description}</p>
                                                              {/* <a href={e.link} className="btn btn-outline-success">{e.button} </a>           */}
                                                            </div>
                                                        </div>
                                                  </div>                                                 
                                              </>
                                            )
                                          })
                                        } 
                                          </div> 
                                                    </div>                 
                                        </section>
                                 
                                </>
                              )
                            })
                          } 
                                  </Carousel.Item>
                                  <Carousel.Item  className="container" interval={1000}> 
                                  {
                            home.section3.map((details)=> {
                              return(
                                <>
                                 
                                      <section className=" py-5">
                                        {/* <h3 className="text-center">{details.title}</h3> */}
                                        <div className="container d-flex justify-content-center">
                                                      <div className="row">
                                        {
                                          details.card2.map((e)=> {
                                            return(
                                              <>                                                 
                                                  <div className="col-xs-12 col-sm-6 col-md-4 p-2">
                                                  <div className="card text-center">
                                                            <div className="overflow">
                                                              <img src={e.imgsrc} alt= {e.imgalt} className="card-img-top" />
                                                            </div>
                                                            <div className= "card-body text-dark">
                                                              <h4 className= "card-title"> {e.title}</h4>
                                                              <p className="card-text text-secondary text-justify ">{e.description}</p>
                                                             
                                                            </div>
                                                        </div>
                                                  </div>                                                 
                                              </>
                                            )
                                          })
                                        } 
                                          </div> 
                                                    </div>                 
                                        </section>
                                 
                                </>
                              )
                            })
                          } 
                              </Carousel.Item>
                          </Carousel>
                        </section>             
                        
                </section>
                </>
                )
              }) 
           }                          
           </> 
        );
    }

export default Home