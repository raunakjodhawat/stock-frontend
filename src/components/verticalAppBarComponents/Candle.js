import * as React from 'react';
import Highcharts from 'highcharts';

function Candle({ candle, tickerSymbol }) {
  if(candle && Object.keys(candle).length > 0) {
    const ohlc = candle.o;
    const volume = candle.v;
    setTimeout(() => {
      Highcharts.chart('candleStickContainer', {
        title: {
          text: `${tickerSymbol} Historical`
        },
    
        yAxis: [{
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'Price'
          },
          height: '60%',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        }, {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'Volume'
          },
          top: '65%',
          height: '35%',
        }],
        series: [{
          name: tickerSymbol,
          data: ohlc,
        }, {
          name: 'Volume',
          data: volume,
          yAxis: 1,
        }]
      });
    }, 500);

    return (
      <div className="App">
        <div id="candleStickContainer"></div>
      </div>
    );
  } else {
    return (
      <div />
    );
  }
}

export default React.memo(Candle);
