import React, { Component } from 'react'
import {getEmployeeDetails} from '../../../utils/api.js' 
import { Formik, Field, Form } from "formik";


var Loader = require('react-loader');

class Pvt extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mailId: '',
			mobileno: '',
			posts: { },
			loader: true,
			errorMsg: ''
		}
		
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		this.setState({loader: false})
		this.getResults()
	 }
 async getResults() {
	const { mailId, mobileno } = this.state
	 var req={
		 "mobileno": mobileno,
		 "mailId": mailId
	 }
	 const {error, message, response} = await getEmployeeDetails(req)
	if (error ) {
		this.setState({errorMsg: message, loader: true})
	}	else {
		 
		this.setState({ posts: response, loader: true })
		}}
	render() {
		const { posts, errorMsg } = this.state
		const { mailId, mobileno } = this.state
		return (
			<div>
			
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
    <Form style={{ width: "100%", maxWidth: 500 }} onSubmit={this.submitHandler}>	
      <h3 className="h3 mb-5 font-weight-normal ">Submit Student Details</h3>	
      <div className="mb-3" style={{ paddingBottom: 5 }}>	
        <label htmlFor="mailId">Email ID</label>	
        <Field	
          type="email"
  name="mailId"
  className="form-control"
  required	
          autoFocus
  value={mailId}
  onChange={this.changeHandler}
        />	
      </div>	
      <div className="mb-3" style={{ paddingBottom: 5 }}>	
        <label htmlFor="mobile">Mobile </label>	
        <Field	
          type="text"
  name="mobileno"
  required	
  autoFocus
  className="form-control"
  value={mobileno}
  onChange={this.changeHandler}	
        />	
      </div>	            	
      <div style={{ justifyContent: "center", alignContent: "center" }}>
        <button  type="submit" className="btn btn-outline-success my-2">Submit</button>	
      </div>
    </Form>	
  )}	
</Formik>	

</div>

				<div>
					<Loader loaded={this.state.loader} className="spinner" />
						
				{posts && posts.firmName
					? <div>
						<h3 className="text-center">	List of Candidate Details</h3>
						<table class="table">
						<thead class="thead-dark">
							<tr>
								<th scope="col">S.No</th>
								<th scoppe="col">Application Status</th>
								{/* <th scoppe="col">Applied Date</th> */}
								<th scope="col">FirstName</th>
								<th scope="col">ApplicationID</th>
								<th scope="col">ClearanceID</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>{posts.appl_status}</td>
								{/* <td>{posts.applied_date}</td> */}
								<td>{posts.firmName}</td>
								<td>{posts.applicationId}</td>
								<td>{posts.clearanceId}</td>
							</tr>
						</tbody>
					  </table>					
						</div>
					: null }
						{errorMsg ? <div>{errorMsg}</div> : null}
						</div>
						</div>
		)
	}
}


export default Pvt




