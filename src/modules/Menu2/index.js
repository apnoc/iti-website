import React from 'react' ;
import data from '../../sitedata.json';


function About() {
        return (
            <> 
            {
                data.menu2.map((information) => {
                  return(
             <div>
               <section className="container">
                   <h3 className="text-center">{information.title}</h3>  
                   {
                      information.paragraph.map((details)=> {
                          return(
                              <>
                                <p className="text-justify">{details.p}</p>
                              </>
                          )
                      }) 
                   }                         
               </section>
            </div>
             );
             
         } )                                  
       
       }
     </>
        )
    }

export default About