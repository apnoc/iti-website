import React from 'react'
import { Formik, Field, Form } from "formik";
import './studentsForm.css';
import data from '../../sitedata.json';


function StudentForm() {
  
    return (	
      <div	
        style={{	
          width: "100%",	
          display: "flex",	
          alignContent: "center",	
          justifyContent: "center",	
          padding: 10,	
        }}	
      >	
        <Formik	
          initialValues={{	
            Username: "",	
            password: ""
          }}	
          onSubmit={ async (values) => {
           
          }}		
        >	
          {() => (	
            <Form style={{ width: "100%", maxWidth: 500 }}>	
              <h3 className="h3 mb-3 text-center font-weight-normal">Student Login</h3>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputUsername">Login Id</label>	
                <Field	
                  id="inputUsername"	
                  className="form-control"	
                  required	
                  autoFocus	
                  name="title"	
                />	
              </div>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputPassword">Password</label>	
                <Field	
                  type="password"	
                  id="inputPassword"	
                  className="form-control"	
                  required	
                  name="description"	
                />	
              </div>	            	
              <div style={{ justifyContent: "center", alignContent: "center" }}>
                <button className="btn btn-outline-success">Login</button>	
              </div>
            </Form>	
          )}	
        </Formik>	
      </div>	
    );	
  }

function StudentLogin() {
    return (
        <div>
           {
                  data.menu8.map((home) => {
                  return(      
                        <>
          <div className=" py-3 " >
                 <div className="container form py-3">
                    <marquee behaviour="alternate"  scrolldelay="140">
                       <h5 >
                              {home.notification}
                       </h5>
                    </marquee>          
                 </div>
               </div>  
          	

           </>
                  )})}

<StudentForm />
        </div>
    )
}

export default StudentLogin;