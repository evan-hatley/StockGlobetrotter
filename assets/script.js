// Key constants to get us started with the API call to yahoo finance
const symbol = 'TSLA';
const interval = '5min';
const additionalStockInfo = '/v11/finance/';
const apiKey = '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa';
const evanApiKey = '97N6vnqvfC7EBjNZqONed7k5iL4p1TJC3Mvqcwoe'
const displayStockInfo = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CGOOG`;

// Secondary API Key in case we run out of calls
// '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa'

// This function is used to get the values relating to each available stock and displaying the proper info in the corresponding text areas. 
$.ajax({
  url: displayStockInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': evanApiKey
  },
  success: function (result) {
    // This part of the function is for displaying TSLA information.
    $('#tsla').on('click', function (event) {
      var tslaSymbol = result.quoteResponse.result[1].symbol;
      var tslaLastPrice = result.quoteResponse.result[1].ask;
      var tslaVolume = result.quoteResponse.result[1].averageDailyVolume10Day;
      $('#stockSymbol').text(tslaSymbol);
      $('#lastPrice').text('Last Ask Price: $' + tslaLastPrice);
      $('#volume').text(tslaVolume + ' Shares Traded Today');
    });
    // This part of the function is for displaying GOOG information.
    $('#goog').on('click', function (event) {
      var googSymbol = result.quoteResponse.result[2].symbol;
      var googLastPrice = result.quoteResponse.result[2].ask;
      var googVolume = result.quoteResponse.result[2].averageDailyVolume10Day;
      $('#stockSymbol').text(googSymbol);
      $('#lastPrice').text('Last Ask Price: $' + googLastPrice);
      $('#volume').text(googVolume + ' Shares Traded Today');
    });
    // This part of the function is for displaying AAPL information.
    $('#aapl').on('click', function (event) {
      var aaplSymbol = result.quoteResponse.result[0].symbol;
      var aaplLastPrice = result.quoteResponse.result[0].ask;
      var aaplVolume = result.quoteResponse.result[0].averageDailyVolume10Day;
      $('#stockSymbol').text(aaplSymbol);
      $('#price').text(aaplLastPrice);
      $('#lastPrice').text('Last Ask Price: $ ' + aaplLastPrice);
      $('#volume').text(aaplVolume + ' Shares Traded Today');
    });
  },
  error: function (error) {
    alert("Cannot get data");
  }
});


const APIKey2 = "7fb1b8a05f0dade67bfe77ce";
const APIurl = `https://v6.exchangerate-api.com/v6/${APIKey2}/latest/USD/`;
const APIurlUSDtoCAD = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/CAD&`;
const APIurlUSDtoGBP = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/GBP`;
const APIurlUSDtoJPY = `https://v6.exchangerate-api.com/v6/${APIKey2}/pair/USD/JPY`;
const tlsaPriceExchange= `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=TSLA`;
const googPriceExchange = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=GOOG`;
const applPriceExchange = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL`;
var currencies = {};


$.ajax({
  url: displayStockInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': evanApiKey
  },
  // Fetching the exchange rates to multiply with each stock
  success: function (result) {
      return fetch(APIurl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      // We started by selecting only 3 currencies to test our limitations with the APIs and produce our MVP. We later plan to expand to a search function with all listed currencies
      const CAD = data.conversion_rates.CAD;
      const GBP = data.conversion_rates.GBP;
      const JPY = data.conversion_rates.JPY;
      // When CAD currency is elected, this part of the function checks which stock was selected but checking the value of #stockSymbol and getting that stocks traded price and multiplying it with the CAD exchange rate.
      $('#CAD').on('click', function (event) {
        event.preventDefault();
        if ($('#stockSymbol') != 'GOOG' != 'AAPL')
        var tslaLastPrice = result.quoteResponse.result[1].ask;
        let tslaExchangeRate = tslaLastPrice * CAD;
        tslaExchangeRate = tslaExchangeRate.toFixed(2);
        $('#exchangeRate').text('$' + tslaExchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'AAPL')
        var googLastPrice = resul.quoteResponse.result[2].ask;
        let googExchangeRate = googLastPrice * CAD;
        googExchangeRate = googExchangeRate.toFixed(2);
        $('#exchangeRate').text('$' + googExchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'GOOG')
        var applLastPrice = result.quoteResponse.result[0].ask;
        let aaplExchangeRate = applLastPrice * CAD;
        aaplExchangeRate = aaplExchangeRate.toFixed(2);
        $('#exchangeRate').text('$' + aaplExchangeRate);
      })
      // When GBP currency is elected, this part of the function checks which stock was selected but checking the value of #stockSymbol and getting that stocks traded price and multiplying it with the GBP exchange rate.
      $('#GBP').on('click', function (event) {
        event.preventDefault();
        if ($('#stockSymbol') != 'GOOG' != 'AAPL')
        var tslaLastPrice = result.quoteResponse.result[1].ask;
        let tslaExchangeRate = tslaLastPrice * GBP;
        tslaExchangeRate = tslaExchangeRate.toFixed(2);
        $('#exchangeRate').text('£' + exchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'AAPL')
        var googLastPrice = result.quoteResponse.result[2].ask;
        let googExchangeRate = googLastPrice * GBP;
        googExchangeRate = googExchangeRate.toFixed(2);
        $('#exchangeRate').text('£' + googExchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'GOOG')
        var applLastPrice = result.quoteResponse.result[0].ask;
        let aaplExchangeRate = applLastPrice * GBP;
        aaplExchangeRate = aaplExchangeRate.toFixed(2);
        $('#exchangeRate').text('£' + aaplExchangeRate);
      })
      // When YEN currency is elected, this part of the function checks which stock was selected but checking the value of #stockSymbol and getting that stocks traded price and multiplying it with the YEN exchange rate.
      $('#JPY').on('click', function (event) {
        event.preventDefault();
        if ($('#stockSymbol') != 'GOOG' != 'AAPL')
        var tslaLastPrice = result.quoteResponse.result[1].ask;
        let tslaExchangeRate = tslaLastPrice * JPY;
        tslaExchangeRate = tslaExchangeRate.toFixed(2);
        $('#exchangeRate').text('￥' + exchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'AAPL')
        var googLastPrice = result.quoteResponse.result[2].ask;
        let googExchangeRate = googLastPrice * JPY;
        googExchangeRate = googExchangeRate.toFixed(2);
        $('#exchangeRate').text('￥' + googExchangeRate);
        if ($('#stockSymbol') != 'TSLA' != 'GOOG')
        var applLastPrice = result.quoteResponse.result[0].ask;
        let aaplExchangeRate = applLastPrice * JPY;
        aaplExchangeRate = aaplExchangeRate.toFixed(2);
        $('#exchangeRate').text('￥' + aaplExchangeRate);
      })
    })
  },

  // Error if the API cannot return Data.
  error: function (error) {
    alert("Cannot get data");
  }
});

// JavaScript to display Contact Us menu on contactUsBtn
function contactUsBtn() {
  $('#contactUsBtn').on('click', function(event) {
    $('.github-links').css('display', 'block');
  });
}
contactUsBtn();

// JavaScript to close the Contact Us menu on close-button
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