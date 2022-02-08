import { useState } from "react";
import { getCompanyInformation } from "../../services";

function Company() {
    const [imgLogoURL, setImageLogo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [tickerSymbol, setTickerSymbol] = useState("TSLA");
    const [exchangeCode, setExchangeCode] = useState("");
    const [ipoDate, setIPODate] = useState("");
    const [category, setCategory] = useState("");

    getCompanyInformation(tickerSymbol).then((response) => {
        setImageLogo(response.logo);
        setCompanyName(response.name);
        setTickerSymbol(response.ticker);
        setExchangeCode(response.exchange);
        setIPODate(response.ipo);
        setCategory(response.finnhubIndustry);
    }).catch((error) => {
        console.error(error);
    });

  return (
    <div className="App">
        <img src={imgLogoURL} alt="logo"/>
        <p>Company Name: <strong>{companyName}</strong></p>
        <p>Stock Ticker Symbol: <strong>{tickerSymbol}</strong></p>
        <p>Stock Exchange code: <strong>{exchangeCode}</strong></p>
        <p>Company IPO date: <strong>{ipoDate}</strong></p>
        <p>Category: <strong>{category}</strong></p>
    </div>
  );
}

export default Company;
