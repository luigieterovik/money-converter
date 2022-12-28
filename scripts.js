const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('converterPara')

const dollar = 5.2
const euro = 5.6
const bitcoin = 0.00001

const convertMoney = () => {
  const inputValue = document.getElementsByTagName('input')[0].value
  const reaisValue = document.getElementsByClassName('valor')[0]
  const currencyValue = document.getElementsByClassName('valor')[1]

  const dollarFinalValue = inputValue / dollar
  const euroFinalValue = inputValue / euro
  const bitcoinFinalValue = inputValue * bitcoin

  reaisValue.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }).format(inputValue)


  if (select.value === "US$ Dólar americano") {
    currencyValue.innerHTML = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }).format(dollarFinalValue)
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }).format(euroFinalValue)
  }

  if (select.value === 'Bitcoin') {
    currencyValue.innerHTML = (bitcoinFinalValue)
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
document.addEventListener('keypress', function(e) {
  if (e.key === "Enter") {
    convertMoney()
  }
})


