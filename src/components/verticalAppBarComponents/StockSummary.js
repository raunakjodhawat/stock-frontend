import { useState } from "react";
import { getCompanyQuote, getRecommendation } from "../../services";

function StockSummary() {
    const [tickerSymbol, setTickerSymbol] = useState("TSLA");
    const [tradingDay, setTradingDay] = useState((new Date()).toLocaleString());
    const [previousClosingPrice, setPreviousClosingPrice] = useState(-1);
    const [openingPrice, setOpeningPrice] = useState(-1);
    const [highPrice, setHighPrice] = useState(-1);
    const [lowPrice, setLowPrice] = useState(-1);
    const [change, setChange] = useState("-");
    const [changePercentage, setChangePercentage] = useState("-");
    const [trends, setTrends] = useState({
        "sell": -1,
        "strongSell": -1,
        "hold": -1,
        "buy": -1,
        "strongBuy": -1,
    });

    getRecommendation(tickerSymbol).then((response) => {
        setTrends({
            "sell": response.sell,
            "strongSell": response.strongSell,
            "hold": response.hold,
            "buy": response.buy,
            "strongBuy": response.strongBuy,
        });
    }).catch((error) => {
        console.error(error);
    });
    getCompanyQuote(tickerSymbol).then((response) => {
        var d = new Date(0);
        d.setUTCSeconds(response.t);
        setTradingDay(d.toLocaleString());
        setPreviousClosingPrice(response.pc);
        setOpeningPrice(response.o);
        setHighPrice(response.h);
        setLowPrice(response.l);
        setChange(response.d);
        setChangePercentage(response.dp);
    }).catch((error) => {
        console.error(error);
    });

    document.addEventListener("change-ticker-symbol", (e) => {
        setTickerSymbol(e.detail.tickerSymbol);
    }, false);
  return (
    <div className="App">
        <p>Stock Ticker Symbol: <strong>{tickerSymbol}</strong></p>
        <p>Trading Day: <strong>{tradingDay}</strong></p>
        <p>Previous Closing price: <strong>{previousClosingPrice}</strong></p>
        <p>Opening Price: <strong>{openingPrice}</strong></p>
        <p>High Price: <strong>{highPrice}</strong></p>
        <p>Low Price: <strong>{lowPrice}</strong></p>
        <p>Change: <strong>{change}</strong></p>
        <p>Change percent: <strong>{changePercentage}</strong></p>
        <p>Recommendation trend: <strong>{JSON.stringify(trends)}</strong></p>
    </div>
  );
}

export default StockSummary;
