import * as React from 'react';

function Company({companyInfo}) {
  return (
    <div className="App">
        <img src={companyInfo.logo} alt="logo"/>
        <p>Company Name: <strong>{companyInfo.name}</strong></p>
        <p>Stock Ticker Symbol: <strong>{companyInfo.ticker}</strong></p>
        <p>Stock Exchange code: <strong>{companyInfo.exchange}</strong></p>
        <p>Company IPO date: <strong>{companyInfo.ipo}</strong></p>
        <p>Category: <strong>{companyInfo.finnhubIndustry}</strong></p>
    </div>
  );
}

export default React.memo(Company);
