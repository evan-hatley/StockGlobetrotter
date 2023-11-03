const symbol = 'TSLA';
const interval = '5min';
const additionalStockInfo = '/v11/finance/';
const apiKey = '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa';
const evanApiKey = '97N6vnqvfC7EBjNZqONed7k5iL4p1TJC3Mvqcwoe'
const displayStockInfo = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CGOOG`;

// '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa'

$.ajax({
  url: displayStockInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': evanApiKey
  },
  // Check iterators to make sure they match the result data.
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

// $.ajax({
//   url: aaplAdditionalInfo,
//   type: 'GET',
//   dataType: 'json',
//   headers: {
//     'x-api-key': apiKey
//   },
//   success: function (result) {
//     console.log(result);
//   },
//   error: function (error) {
//     alert("Cannot get data");
//   }
// });

// $.ajax({
//   url: tslaAdditionalInfo,
//   type: 'GET',
//   dataType: 'json',
//   headers: {
//     'x-api-key': apiKey
//   },
//   success: function (result) {
//     console.log(result);
//     var symbol = result.quoteResponse.result[1].symbol;
//     var lastPrice = result.quoteResponse.result[1].ask;
//     var volume = result.quoteResponse.result[1].averageDailyVolume10Day;
//     $('#stockSymbol').text(symbol);
//     $('#lastPrice').text('Last Ask Price: $' + lastPrice);
//     $('#volume').text(volume + ' Shares');
//     $('exchangeRate').text('Select Currency to Convery');
//   },
//   error: function (error) {
//     alert("Cannot get data");
//   }
// });

// $.ajax({
//   url: googAdditionalInfo,
//   type: 'GET',
//   dataType: 'json',
//   headers: {
//     'x-api-key': apiKey
//   },
//   success: function (result) {
//     console.log(result);
//   },
//   error: function (error) {
//     alert("Cannot get data");
//   }
// });


const APIKey2 = "7fb1b8a05f0dade67bfe77ce";
const APIurl = `https://v6.exchangerate-api.com/v6/${APIKey2}/latest/USD`;
var currencies = {};

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

      const currencyElement = $("#Currency");
      currencyElement.textContent = "Select Currency: ";
      // I created a for loop to dynamically create the buttons for each currency by putting them into an array then appending child for each
      const entries = Object.entries(selectedRates);
      for (let i = 0; i < entries.length; i++) {
        const exchangeOption = entries[i][0];
        const value = entries[i][1];
        const currencyButton = document.createElement("button");
        currencyButton.innerHTML = exchangeOption;

        currencyButton.addEventListener("click", function () {
          const exchangeRateElement = document.getElementById("exchangeRate");
          // Learned about the backticks/template literals from Josh Diehl and how they can differ from "". This line only works with the back ticks
          exchangeRateElement.innerHTML = `${exchangeOption} Exchange Rate: ${value}`;
          currencyElement.appendChild(currencyButton);
        });
      }
      return selectedRates;
    })
    .catch(function (error) {
      console.error("Something went wrong:", error);
    });
}

// async function stockRate() {
//   var rate = await exchangeRate();
//   var stock = await getStock();
//   console.log(rate, stock);
// }
// stockRate();


// JavaScript to display Contact Us munu on contactUsBtn
const contactUsBtn = () => {
  $("#contactUsBtn").on('click', function (event) {
    $('.github-links').css("display", "block");
  });

}
contactUsBtn();

 // JavaScript to handle the close Contact Us menu button functionality
const closeContactUsBtn = () => {
  const githubLinks = $(".github-links");
  $("#close-button").on("click", () => {
    githubLinks.css("display", "none");
  });

}
closeContactUsBtn();


// JavaScript to handle the dropdown menu functionality
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