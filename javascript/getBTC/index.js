fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(response => response.json())
    .then(data => {
        console.log(data);

    });

fetch("https://api.nomics.com/v1/currencies/ticker?key=9e76ca0b9a1260eaf5b6f6f196e061d83273e64c&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
    .then(response => response.json())
    .then(data => console.log(data))




const getBtcData = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
        });
}

getBtcData()