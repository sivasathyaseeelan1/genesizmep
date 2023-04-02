import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    
    <div className=" h-80 w-80" >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCWhYjVrayrHzdAh3LBi0HLrfX5llNc7yw" }}
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