import data from '../../sitedata.json';
import React from 'react';




function Contact()
{
            return <>
            
            <section className="container">        
           
              {
                props.data.map(data=>{
                  return( 
                    <>
                    <h1 id={data.id}>{data.Header}</h1>                   
                    <p>{data.p1}</p>
                   <p>{data.p2}</p>
                   <p>{data.p3}</p>
                   <p>{data.p4}</p>
                   <p>{data.p5}</p>
                   <p>{data.p6}</p>
                  </>    
                  )    
                })                
              }
             
              </section>
             
            </>   
}



export default Contact;
