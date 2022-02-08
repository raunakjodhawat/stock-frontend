import * as React from 'react';

function Candle({candle}) {
    console.log(candle);
  return (
    <div className="App">
        Candle Stick
    </div>
  );
}

export default React.memo(Candle);
