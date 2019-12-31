import React from 'react';

import { Map } from '../map/Map';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <body>
        <h1>Hello World!</h1>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d0109d48896c3978a0177697fbc0e3bb"></script>
        <Map></Map>
      </body>
    </div>

  );
}

export default App;
