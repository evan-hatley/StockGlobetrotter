const symbol = 'TSLA';
const interval = '5min';
const additionalStockInfo = '/v11/finance/';
const apiKey = '6jt0wuACYB7T5ejVcPXfa6rOT1CgGZEi45R9RVVa';
const displayStockInfo = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CGOOG`;
const aaplAdditionalInfo = 'https://yfapi.net/v11/finance/quoteSummary/AAPL?lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile';
const tslaAdditionalInfo = 'https://yfapi.net/v11/finance/quoteSummary/TSLA?lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile';
const googAdditionalInfo = 'https://yfapi.net/v11/finance/quoteSummary/GOOG?lang=en&region=US&modules=defaultKeyStatistics%2CassetProfile';

$.ajax({
  url: displayStockInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': apiKey
  },
  success: function (result) {
    console.log(result); 
  },
  error: function (error) {
    alert("Cannot get data");
  }
});

$.ajax({
  url: aaplAdditionalInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': apiKey
  },
  success: function (result) {
    console.log(result);
  },
  error: function (error) {
    alert("Cannot get data");
  }
});

$.ajax({
  url: tslaAdditionalInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': apiKey
  },
  success: function (result) {
    console.log(result);
  },
  error: function (error) {
    alert("Cannot get data");
  }
});

$.ajax({
  url: googAdditionalInfo,
  type: 'GET',
  dataType: 'json',
  headers: {
    'x-api-key': apiKey
  },
  success: function (result) {
    console.log(result);
  },
  error: function (error) {
    alert("Cannot get data");
  }
});


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