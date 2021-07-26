import React from 'react'
import { Formik, Field, Form } from "formik"


function EmplyomentForm() {
  
    return (	
      <div	
        style={{	
          margin:"3rem",
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
              <h3 className="h3 mb-3 font-weight-normal text-center">Employee Login</h3>	
              <div className="mb-3" style={{ paddingBottom: 5 }}>	
                <label htmlFor="inputUsername">User Name</label>	
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

function EmployeeLogin() {
    return (
        <div>
           <EmplyomentForm />	
        </div>
    )
}

export default EmployeeLogin;