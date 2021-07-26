import React from 'react' ;
import data from '../../sitedata.json';


function Schemes() {
        return (
            <>
            {
                data.menu4.map((e)=> {
                return(
                        <>
                            {
                            e.section1.map((details)=> {
                              return(
                                <>
                                  <section class="articles">
                                      <section className=" py-5">
                                        <h3 className="text-center">{details.title}</h3>
                                        <div className="container d-flex justify-content-center">
                                                      <div className="row">
                                        {
                                          details.card.map((e)=> {
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
                                  </section>
                                </>
                              )
                            })
                          }

                        </>
                )}
                )
            }
                   
            </>
        )
    }

export default Schemes


