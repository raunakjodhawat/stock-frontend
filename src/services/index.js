const getCompanyInformation = (tickerSymbol) => {
    return fetch(`http://localhost:9000/stock/company-info/${tickerSymbol}`)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
        throw error;
    });
}

const getCompanyQuote = (tickerSymbol) => {
    return fetch(`http://localhost:9000/stock/company-quote/${tickerSymbol}`)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
        throw error;
    });
}

const getRecommendation = (tickerSymbol) => {
    return fetch(`http://localhost:9000/stock/recommendation/${tickerSymbol}`)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
        throw error;
    });
}
module.exports = {
    getCompanyInformation,
    getCompanyQuote,
    getRecommendation
}