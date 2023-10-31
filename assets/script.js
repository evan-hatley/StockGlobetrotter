const apiKey = 'AANVGOW7H3G8JN6L';
const symbol = 'TSLA';
const interval = '5min';

const requestUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`;


function getStock() {

return fetch(requestUrl)
  .then(function (response) {
    console.log(response.status)
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    return data;
  })
  .catch(function (error) {
    console.error('Error:', error);
  })
}

const APIKey2 = "7fb1b8a05f0dade67bfe77ce";
const APIurl = `https://v6.exchangerate-api.com/v6/${APIKey2}/latest/USD`;

function exchangeRate() {
  return fetch(APIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.error('Something went wrong:', error);
    });
}
async function stockRate() {
  var rate = await exchangeRate();
  var stock = await getStock();
  console.log(rate, stock);


}

stockRate();