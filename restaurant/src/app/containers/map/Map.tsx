import React, { Component } from 'react';

import './Map.scss';

declare var daum: any
export class MainMap extends Component {

  render() {
    return(
      <div className="map-wrapper">
        <div id="map"></div>
      </div>
    );
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=d0109d48896c3978a0177697fbc0e3bb&autoload=false&libraries=services";
    document.head.appendChild(script);
    const el = document.getElementById('map');

    script.onload = () => {
      if (el) {
        daum.maps.load(() => {
          const option = {
            center: new daum.maps.LatLng(37.481417, 126.952778),
            level: 4
          };
          const map = new daum.maps.Map(el, option);
        })
      }
    }
  }
}

// { lat: 37.481417, lng: 126.952778}}
// key : d0109d48896c3978a0177697fbc0e3bb