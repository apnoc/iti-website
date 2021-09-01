// import React from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// function contactiti() {
//   return (
//     <div style={{ background: "#f0f0f0", height: "95vh" }}>
//       <section className="p-5">
//         <Card className="p-5">
//           <h3 className="font-weight-bold text-center ">Contact Us</h3>
//           <div className="row">
//             <CardBody className="col-md-6 m-5">
//               <CardTitle>
//                 <span className="font-weight-bold ">
//                   DIRECTORATE OF INDUSTRIAL TRAINING
//                 </span>
//               </CardTitle>
//               <CardText>
//                 <span className="font-weight-bold ">Address:</span> 54/8/32A, 4th Cross, 2nd Rd, Auto Nagar, Vijayawada, Andhra Pradesh 520007
//               </CardText>
//               <CardText>
//                 <span className="font-weight-bold ">Department Web site :</span>
//                 https://iti.nic.in
//               </CardText>
//               <CardText>
//                 <span className="font-weight-bold ">Email :</span>
//                 director.trg@ap.gov.in
//               </CardText>
//               <CardText>
//                 <span className="font-weight-bold ">Phone Number :</span>
//                 09246412283
//               </CardText>
//             </CardBody>
//             <CardImg
//               className="col-md-4 p-3  text-end"
//               variant="top"
//               style={{ width: "500px", height: "350px" }}
//               className="img-thumbnail d-none d-lg-block"
//               src="/images/map.png"
//             />
//           </div>
//         </Card>
//       </section>
//     </div>
//   );
// }

// export default contactiti;

















import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCnbOCxRtB73XpmTIV2kyqksa4eKKxLoiw'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;