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

const getNews = (tickerSymbol) => {
    return fetch(`http://localhost:9000/stock/company-news/${tickerSymbol}?from=2021-09-01&to=2021-09-09`)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
        throw error;
    });
}

//http://localhost:9000/stock/candle/TSLA?resolution=1&from=1631022248&to=1631627048
const getCandle = (tickerSymbol) => {
    return fetch(`http://localhost:9000/stock/candle/${tickerSymbol}?resolution=1&from=1631022248&to=1631627048`)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
        throw error;
    });
}

module.exports = {
    getCompanyInformation,
    getCompanyQuote,
    getRecommendation,
    getNews,
    getCandle
}