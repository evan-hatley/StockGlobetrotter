const apiKey = 'AANVGOW7H3G8JN6L';
const symbol = 'TSLA';
const interval = '5min';

const requestUrl = ``;


// function getStock() {
//   return fetch(requestUrl)
//     .then(function (response) {
//       console.log(response.status)
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       return data;
//     })
//     .catch(function (error) {
//       console.error('Error:', error);
//     })
// }

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

// TODO: Update EventListeners to link to id exchangeRate
      document.getElementById('CAD').addEventListener('click', function (event) {
        event.preventDefault();
        const exchangeRateElement = document.getElementById('exchangeRate');
        exchangeRateElement.innerHTML = `CAD Exchange Rate: ${currencies.CAD}`;
      });
    
      
      document.getElementById('GBP').addEventListener('click', function (event) {
        event.preventDefault(); 
        const exchangeRateElement = document.getElementById('exchangeRate');
        exchangeRateElement.innerHTML = `EUR Exchange Rate: ${currencies.GBP}`; 
      });
    
    
      document.getElementById('JPY').addEventListener('click', function (event) {
        event.preventDefault(); 
        const exchangeRateElement = document.getElementById('exchangeRate');
        exchangeRateElement.innerHTML = `JPY Exchange Rate: ${currencies.JPY}`;
      });
    
      return selectedRates;
    })
    };

async function stockRate() {
  var rate = await exchangeRate();
  var stock = await getStock();
  console.log(rate, stock);
}
stockRate();

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