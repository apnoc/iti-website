// import React, { useState, useRef } from "react";

// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import cities from "./cities.json";
// import osm from "./osm-providers";
// import "leaflet/dist/leaflet.css";

// const markerIcon = new L.Icon({
//     iconUrl: require("./pin.png"),
//     iconSize: [40, 40],
//     iconAnchor: [17, 46], //[left/right, top/bottom]
//     popupAnchor: [0, -46], //[left/right, top/bottom]
//   });

// const Contactiti = () => {
//   const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
//   const ZOOM_LEVEL = 9;
//   const mapRef = useRef();

//   return (
//     <>
//       <div className="col"><h1></h1>
//       <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
//                             <TileLayer
//                                 url={osm.maptiler.url}
//                                 attribution={osm.maptiler.attribution}
//                             />
//                         </Map>
//             <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
//               <TileLayer
//                 url={osm.maptiler.url}
//                 attribution={osm.maptiler.attribution}
//               />

//               {cities.map((city, idx) => (
//                 <Marker
//                   position={[city.lat, city.lng]}
//                   icon={markerIcon}
//                   key={idx}
//                 >
//                   <Popup>
//                     <b>
//                       {city.city}, {city.country}
//                     </b>
//                   </Popup>
//                 </Marker>
//               ))}
//             </Map>
//           </div>
//     </>
//   );
// };

// export default Contactiti;

// import React, { useState, useRef } from "react";
// import osm from "./osm-providers";
// import { Map, TileLayer } from "react-leaflet";
// import './map.css';
// import "leaflet/dist/leaflet.css";

// const Contactiti = () => {
//   const [center, setCenter] = useState({ lat: 16.51, lng: 80.64 });
//   const ZOOM_LEVEL = 9;
//   const mapRef = useRef();

//   return (
//     <div>
//       <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
//         <TileLayer
//           url={osm.maptiler.url}
//           attribution={osm.maptiler.attribution}
//         />
//       </Map>
//     </div>
//   );
// };

// export default Contactiti;

import React, { useState, useRef } from "react";
import osm from "./osm-providers";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cities from "./cities.json";
import { Breadcrumb } from "../../components/Header/Breadcrumb/breadrcrumb";


const markerIcon = new L.Icon({
  iconUrl: require("./pin.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Contactiti = () => {
  const [center, setCenter] = useState({ lat: 16.51, lng: 80.64 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div>
       <Breadcrumb title="Contact Us > Map" />
      <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        {cities.map((city, idx) => (
          <Marker position={[city.lat, city.lng]} icon={markerIcon} key={idx}>
            <Popup>
              <b>
                {city.name}, {city.country}
              </b>
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default Contactiti;
