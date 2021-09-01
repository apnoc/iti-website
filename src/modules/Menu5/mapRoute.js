import React, { Component } from "react";
import GoogleMapReact from "google-map-react";



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 16.51,
      lng: 80.64,
    },
    zoom: 9,
  };

  render() {
    return (
      <>
        <div style={{ background: "#f0f0f0", height: "95vh" }}>
          <section className="p-5 text-center">
            <div style={{ height: "50vh", width: "50vw" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCnbOCxRtB73XpmTIV2kyqksa4eKKxLoiw",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="ITI Address"
                />
              </GoogleMapReact>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Map;

// import React from "react";
// import SimpleMap from "./SimpleMap";
// import {  Link } from "react-router-dom";
// import "./styles.css";
// const locations = require("../../locations.json");

// function Map() {
//   return (
//     <div className="App">
//       <SimpleMap locations={locations} />
//     </div>
//   );
// }

// export default Map;

// import React from "react";
// import GoogleMapReact from "google-map-react";
// import pin from "../../../public/images/pin.png";
// import { Link } from "react-router-dom";

// const markerStyle = {
//   position: "absolute",
//   top: "100%",
//   left: "50%",
//   transform: "translate(-50%, -100%)"
// };

// class Map extends React.Component {
//   static defaultProps = {
//     center: {
//       lat: 60.192059,
//       lng: 24.945831
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           {this.props.locations.map(item => {
//             if (item.address.length !== 0) {
//               return item.address.map(i => {
//                 return (
//                   <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
//                     <img style={markerStyle} src={pin} alt="pin" />
//                   </Link>
//                 );
//               });
//             }
//           })}
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;
