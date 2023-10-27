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
