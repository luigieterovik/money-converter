const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('converterPara')


const convertMoney = async () => {
  const inputValue = document.getElementsByTagName('input')[0].value
  const reaisValue = document.getElementsByClassName('valor')[0]
  const currencyValue = document.getElementsByClassName('valor')[1]

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dollar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  reaisValue.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(inputValue)


  if (select.value === "US$ Dólar americano") {
    currencyValue.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(inputValue / dollar)
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(inputValue / euro)
  }

  if (select.value === 'Bitcoin') {
    currencyValue.innerHTML = ((inputValue / bitcoin) / 1000).toFixed(7)
  }
}

const currencyChange = () => {
  const currencyName = document.getElementById('p_description')
  const currencyImage = document.getElementById('flag-logo')

  if (select.value === 'US$ Dólar americano') {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/eua.png"
  }

  if (select.value === '€ Euro') {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (select.value === 'Bitcoin') {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  convertMoney()
}

button.addEventListener('click', convertMoney)
select.addEventListener('change', currencyChange)
document.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    convertMoney()
  }
})