import React from 'react'
import data from '../../../temp.json';


function Gvt() {
    return (
        <>
       
                    {
                        data.pvtdata.map((information) => {
                              return(
                                  <>
                                     <section className="m-3 ">
                                      <h4    className="text-center py-2">{information.heading}</h4>
                                          
                                            <h6  className="text-center px-5">{information.header}</h6>
                                         
                                      <div className="table-responsive">
                                                                 {
                                                                 information.content.map((details) => {
                                                                                             return(
                                                                                                 <table className="table table-bordered table-striped table-hover">
                                                                                                     <thead className="thead-dark" >
                                                                                                         {
                                                                                                         details.heading.map((tables) => {
                                                                                                             return(
                                                                                                                 <tr>
                                                                                                                    <th scope="col">{tables.h1}</th> 
                                                                                                                     <th scope="col">{tables.h2}</th>                                                                                  
                                                                                                                     <th scope="col">{tables.h3}</th>                                                                               
                                                                                                                     <th scope="col">{tables.h4}</th> 
                                                                                                                     <th scope="col">{tables.h5}</th>
                                                                                                                     <th scope="col">{tables.h6}</th> 
                                                                                                                     <th scope="col">{tables.h7}</th>                                                                                  
                                                                                                                     {/* <th scope="col">{tables.h8}</th>                                                                               
                                                                                                                     <th scope="col">{tables.h9}</th>                                                                                             */}
                                                                                                                 </tr>
                                                                                                             );
                                                                                                         }
                                                                                                         )}                                                                      
                                                                                                     
                                                                                                     </thead>
                                                                                                     <tbody>
                                                                                                     {
                                                                                                         details.Paragraph.map((description) => {
                                                                                                             return(
                                                                                                                 <tr >
                                                                                                                     <td>{description.p1}</td>
                                                                                                                     <td>{description.p2}</td>
                                                                                                                     <td>{description.p3}</td>
                                                                                                                     <td>{description.p4}</td>
                                                                                                                     <td>{description.p5}</td>
                                                                                                                     <td>{description.p6}</td>
                                                                                                                     <td>{description.p7}</td>
                                                                                                                     {/* <td>{description.p8}</td>
                                                                                                                     <td>{description.p9}</td> */}
                                                                                                                 </tr>
                                                                                                                 );
                                                                                                             }
                                                                                                             )}                                                                   
                                                                                             
                                                                                                 </tbody>
                                                                                                 </table>
                                                                                             );
                                                                                         })
                                                                 }
                                        </div>
                                        </section>
                                  </>
                                );
                                
                            } )                                  
                          
                          }
               
      </>
    )
}

export default Gvt;
