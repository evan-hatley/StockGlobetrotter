// Key constants to get us started with the API call to yahoo finance
const symbol = 'TSLA';
const interval = '5min';
const additionalStockInfo = '/v11/finance/';
const apiKey = '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa';
const evanApiKey = '97N6vnqvfC7EBjNZqONed7k5iL4p1TJC3Mvqcwoe'
const displayStockInfo = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CGOOG`;
// Secondary API Key in case we run out of calls
// '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa'

$.ajax({
  url: displayStockInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': evanApiKey
  },
  // Created three functions to operate our MVP stocks with basic calls
  success: function (result) {
    console.log(result);
    $('#tsla').on('click', function (event) {
      var tslaSymbol = result.quoteResponse.result[1].symbol;
      var tslaLastPrice = result.quoteResponse.result[1].ask;
      var tslaVolume = result.quoteResponse.result[1].averageDailyVolume10Day;
      $('#stockSymbol').text(tslaSymbol);
      $('#lastPrice').text('Last Ask Price: $' + tslaLastPrice);
      $('#volume').text(tslaVolume + ' Shares');
    });
    $('#goog').on('click', function (event) {
      var googSymbol = result.quoteResponse.result[2].symbol;
      var googLastPrice = result.quoteResponse.result[2].ask;
      var googVolume = result.quoteResponse.result[2].averageDailyVolume10Day;
      $('#stockSymbol').text(googSymbol);
      $('#lastPrice').text('Last Ask Price: $' + googLastPrice);
      $('#volume').text(googVolume + ' Shares');
    });
    $('#aapl').on('click', function (event) {
      var aaplSymbol = result.quoteResponse.result[0].symbol;
      var aaplLastPrice = result.quoteResponse.result[0].ask;
      var aaplVolume = result.quoteResponse.result[0].averageDailyVolume10Day;
      $('#stockSymbol').text(aaplSymbol);
      $('#lastPrice').text('Last Ask Price: $' + aaplLastPrice);
      $('#volume').text(aaplVolume + ' Shares');
    });
  },
  error: function (error) {
    alert("Cannot get data");
  }
});
// Second API call to get our currency exchange rates. I used 3 API endpoints to differentiate the conversions to our base 3 currencies
const APIKey2 = "7fb1b8a05f0dade67bfe77ce";
const APIurl = `https://v6.exchangerate-api.com/v6/${APIKey2}/latest/USD/`;
const APIurlUSDtoCAD = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/CAD`;
const APIurlUSDtoGBP = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/GBP`;
const APIurlUSDtoJPY = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/JPY`;
var currencies = {};
var amount = $('#lastPrice');

function exchangeRate() {
  return fetch(APIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // We started by selecting only 3 currencies to test our limitations with the APIs and produce our MVP. We later plan to expand to a search function with all listed currencies
      const selectedRates = {
        CAD: data.conversion_rates.CAD,
        GBP: data.conversion_rates.GBP,
        JPY: data.conversion_rates.JPY,
      };
      currencies = selectedRates;
      console.log(selectedRates);

      $('#CAD').on('click' , function (event) {
          fetch(APIurlUSDtoCAD)
          .then(function (response) {
            return response.json();
          })
          .then (function (response) {
            console.log(response);
            let convertedPrice = exchangeRate * tslaLastPrice;
            $('#exchangeRate').text(data.conversion_rates.CAD);
          })   
      })

      $('#GBP').on('click' , function (event) {
        fetch(APIurlUSDtoGBP)
        .then(function (response) {
          return response.json();
        })
        .then (function (response) {
          console.log(response);
          $('#exchangeRate').text(data.conversion_rates.GBP);
        })   
    })

    $('#JPY').on('click' , function (event) {
      fetch(APIurlUSDtoJPY)
      .then(function (response) {
        return response.json();
      })
      .then (function (response) {
        console.log(response);
        $('#exchangeRate').text(data.conversion_rates.JPY);
      })   
  })

      return selectedRates;
    })
    };

async function stockRate() {
  var rate = await exchangeRate();
  var stock = await getStock();
  console.log(rate, stock);
}
stockRate();

// JavaScript to display Contact Us menu on contactUsBtn
function contactUsBtn() {
  $('#contactUsBtn').on('click', function(event) {
    $('.github-links').css('display', 'block');
  });
}
contactUsBtn();

function closeContactUsBtn() {
  var githubLinks = $('.github-links');
  $('#close-button').on('click', function() {
    githubLinks.css('display', 'none');
  });
}
closeContactUsBtn();

// Adds dropdown functionality  to our stock and currency select buttons
$(document).ready(function() {
  const stockCollapsible = $("#stock-collapsible");
  const currencyCollapsible = $("#currency-collapsible");

  stockCollapsible.on("click", function() {
    toggleCollapsible(stockCollapsible);
  });

  currencyCollapsible.on("click", function() {
    toggleCollapsible(currencyCollapsible);
  });

  function toggleCollapsible(collapsible) {
    const body = collapsible.find(".collapsible-body");
    body.toggle();
  }
});