// import React from 'react'
// import { Formik, Field, Form } from "formik"

// function Contact() {

//     return (
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           alignContent: "center",
//           justifyContent: "center",
//           padding: 10,
//         }}
//       >
//         <Formik
//           initialValues={{
//             title: "",
//             description: "",
//             day: "",
//             level: "",
//           }}
//           onSubmit={ async (values) => {
//            ;
//           }}
//         >
//           {() => (
//             <Form style={{ width: "100%", maxWidth: 500 }}>
//               <h3 className="h3 mb-3  text-center font-weight-normal">Contact Form</h3>
//               <div className="mb-3" style={{ paddingBottom: 5 }}>
//                 <label htmlFor="inputTitle">Full Name</label>
//                 <Field
//                   id="inputTitle"
//                   className="form-control"
//                   required
//                   autoFocus
//                   name="title"
//                 />
//               </div>
//               <div className="mb-3" style={{ paddingBottom: 5 }}>
//                 <label htmlFor="inputDescription">Email</label>
//                 <Field
//                   type="textarea"
//                   id="inputDescription"
//                   className="form-control"
//                   required
//                   name="description"
//                 />
//               </div>
//               <div className="mb-3" style={{ paddingBottom: 5 }}>
//                 <label htmlFor="inputDay">Phone Number</label>
//                 <Field
//                   name="day"
//                   id="inputDay"
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ paddingBottom: 5 }}>
//                 <label htmlFor="inputLevel">Address</label>
//                 <Field
//                   name="level"
//                   id="inputLevel"
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div style={{ justifyContent: "center", alignContent: "center" }}>
//                 <button className="btn btn-outline-success">Submit</button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     );
//   }

// function ContactUs() {
//     return (
//         <div>
//            <Contact />
//         </div>
//     )
// }

// export default ContactUs

import React from "react";
import "./styles.css";
import { Breadcrumb } from "../../components/Header/Breadcrumb/breadrcrumb";
import HeaderLink from "../../components/Header/HeaderLink";

function index() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <div className="contactus">
        <div className="container">
          <h1 className="common__heading  ">Contact Us</h1>
          <div className="row display__flexbox">
            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__address">
                  <img
                    alt="Address"
                    src="./images/address.png"
                    title="Address"
                  />
                </span>
                <h4>Address</h4>
                <address className="">
                  Industrial Trainning Institute
                  <br />
                  ITI P.O., Andhra Pradesh 600 036
                  <br />
                  INDIA
                </address>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__directory">
                  <img
                    alt="Directory"
                    src="./images/directory.png"
                    title="Directory"
                  />
                </span>
                <h4>Directory</h4>
                <p className="">
                  Search the Directory
                  {/* <a href="ITIdirectory" title="Directory">
                    Directory
                  </a> */}
                  for listings of all people and locations in ITI
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="contactus__card text-center">
                <span className="icon__campusmap">
                  <img
                    alt="Campus Map"
                    src="./images/campus-map.png"
                    title="Campus Map"
                  />
                </span>
                <h4>Campus Map</h4>
                <p class="">
                  <HeaderLink to="ITImap" title="View a map">
                    View a map
                  </HeaderLink>
                  of the ITI
                </p>
              </div>
            </div>
          </div>
          <p className="my-5">
            <b>Please note:</b> The Offices, Departments, Research Centres and
            other Facilities have their own numbers. Please consult the
            Directory or the Department/Centre websites.
          </p>
        </div>
      </div>
    </>
  );
}

export default index;
