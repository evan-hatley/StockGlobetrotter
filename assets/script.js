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
var currencies = {};

function exchangeRate() {
  return fetch(APIurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // We started by selecting only 3 currencies to test our limitations with the APIs and produce our MVP. We later plan to expand to a search function with all listed currencies
      const selectedRates = {
        'CAD': data.conversion_rates.CAD,
        'GBP': data.conversion_rates.GBP,
        'JPY': data.conversion_rates.JPY
      };
      currencies = selectedRates;
      console.log(selectedRates);

      const currencyElement = document.getElementById('Currency');
        currencyElement.innerHTML = 'Select Currency: ';
// I created a for loop to dynamically create the buttons for each currency by putting them into an array then appending child for each
        const entries = Object.entries(selectedRates);
        for (let i = 0; i < entries.length; i++) {
          const exchangeOption = entries[i][0];
          const value = entries[i][1];
        const currencyButton = document.createElement("button");
        currencyButton.innerHTML = exchangeOption;
        
        currencyButton.addEventListener("click", function() {
          const exchangeRateElement = document.getElementById('exchangeRate');
          // Learned about the backticks/template literals from Josh Diehl and how they can differ from "". This line only works with the back ticks
          exchangeRateElement.innerHTML = `${exchangeOption} Exchange Rate: ${value}`;
        });
        currencyElement.appendChild(currencyButton);
      }
      return selectedRates;
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


const contactUsBtn = () => {
  $("#contactUsBtn").on('click', function (event) {
    $('.github-links').css("display", "block");
  });

  
}

contactUsBtn();

 // JavaScript to handle the close button functionality
 const closeButton = document.getElementById("close-button");
 const githubLinks = document.querySelector(".github-links");

 closeButton.addEventListener("click", () => {
   githubLinks.style.display = "none";
 });

  // JavaScript to handle the collapsible functionality
  const stockCollapsible = document.getElementById("stock-collapsible");
  const currencyCollapsible = document.getElementById("currency-collapsible");

  stockCollapsible.addEventListener("click", () => {
    toggleCollapsible(stockCollapsible);
  });

  currencyCollapsible.addEventListener("click", () => {
    toggleCollapsible(currencyCollapsible);
  });

  function toggleCollapsible(collapsible) {
    const body = collapsible.querySelector(".collapsible-body");
    body.style.display = body.style.display === "block" ? "none" : "block";
  }