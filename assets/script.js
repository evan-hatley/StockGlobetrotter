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

