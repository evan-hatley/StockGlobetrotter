const apiKey = 'AANVGOW7H3G8JN6L';
const symbol = 'TSLA';
const interval = '5min';

const requestUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;

fetch(requestUrl)
  .then(function (response) {
    console.log(response.status)
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error('Error:', error);
  })

  const APIKey2 = "7fb1b8a05f0dade67bfe77ce";

  const APIurl = "https://v6.exchangerate-api.com/v6/7fb1b8a05f0dade67bfe77ce/latest/USD";
  
      function exchangeRate () {
          fetch("https://v6.exchangerate-api.com/v6/7fb1b8a05f0dade67bfe77ce/latest/USD")
              .then(function(response) {
                  return response.json();
                  })
                  .then(function(data) {
                      console.log(data);
                    })
                    .catch(function(error) {
                      console.error('Something went wrong:', error);
                    });
      }
  
      exchangeRate();
  