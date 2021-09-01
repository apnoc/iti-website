// import React,{Component} from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyCnbOCxRtB73XpmTIV2kyqksa4eKKxLoiw")
// })(MapContainer)




// import React from 'react'

// function Map() {
//   return (
//     <div>
//       <h1>Map</h1>
//     </div>
//   )
// }

// export default Map




import React from "react";
import GoogleMapReact from "google-map-react";
// import pin from "../../../public/images/pin.png";
import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 60.192059,
      lng: 24.945831
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.locations.map(item => {
            if (item.address.length !== 0) {
              return item.address.map(i => {
                return (
                  <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
                    <img style={markerStyle} src="../../../public/images/pin.png" alt="pin" />
                  </Link>
                );
              });
            }
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
