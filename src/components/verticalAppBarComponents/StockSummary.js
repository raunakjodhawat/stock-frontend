function StockSummary({companyQuote, recommendation}) {
    const trends = JSON.stringify({
        "sell": recommendation.sell,
        "strongSell": recommendation.strongSell,
        "hold": recommendation.hold,
        "buy": recommendation.buy,
        "strongBuy": recommendation.strongBuy,
    });
    const d = new Date(0);
    d.setUTCSeconds(companyQuote.t);
  return (
    <div className="App">
        <p>Trading Day: <strong>{d.toLocaleString()}</strong></p>
        <p>Previous Closing price: <strong>{companyQuote.pc}</strong></p>
        <p>Opening Price: <strong>{companyQuote.o}</strong></p>
        <p>High Price: <strong>{companyQuote.h}</strong></p>
        <p>Low Price: <strong>{companyQuote.l}</strong></p>
        <p>Change: <strong>{companyQuote.d}</strong></p>
        <p>Change percent: <strong>{companyQuote.dp}</strong></p>
        <p>Recommendation trend: <strong>{trends}</strong></p>
    </div>
  );
}

export default StockSummary;
