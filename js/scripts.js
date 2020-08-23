finnhubClient.stockSymbols("US", (error, data, response) => {
    console.log(data)
});

console.log(stockSymbols());
