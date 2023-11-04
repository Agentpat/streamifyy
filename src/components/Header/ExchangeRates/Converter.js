import React, { useEffect, useState } from 'react';
import './Converter.css';
import CurrencyRow from './CurrencyRow';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
  params: {
    from: 'USD',
    to: 'EUR,GBP',
  },
  headers: {
    'X-RapidAPI-Key': 'fcab8f8aa4mshf1c1e34c42a57ffp11ec40jsn8594a806f680',
    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
  },
};

function Converter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] =useState()
  const [toCurrency, setToCurrency] =useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount,setAmount] =useState(1)
  const[amountFromCurrency, setAmmountFromCurrency] =useState(true)
  
  let toAmount, fromAmount 
  if (amountFromCurrency){
    fromAmount =amount
    toAmount= amount * exchangeRate
  }else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios.request(options)
        .then(response => {
          const data = response.data;
          setExchangeRate(data.rates[toCurrency]); // Remove the extra closing parenthesis here
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [fromCurrency, toCurrency]);
  

  useEffect(() => {
    axios.request(options)
      .then(response => {
        const data = response.data;
        const firstCurrency =Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmmountFromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmmountFromCurrency(false)
  }

  return (
    <div className='converter__cover'>
      <h1 className='title'>Live Exchange Rates</h1>
      <div className='Currency__container'>
        <div className='CurrencyRow'>
          <CurrencyRow key="from"
          currencyOptions={currencyOptions} 
          selectedCurrency = {fromCurrency}
          onChangeCurrency = {e => setFromCurrency(e.target.value)}
          onChangeAmount = {handleFromAmountChange}
          amount ={fromAmount}
          />
        </div>
        
        <div className='CurrencyRow'>
          <CurrencyRow key="to"
          currencyOptions={currencyOptions} 
          selectedCurrency = {toCurrency}
          onChangeCurrency ={e => setToCurrency(e.target.value)}
          onChangeAmount = {handleToAmountChange}
          amount ={toAmount}
          />
        </div>
       
      </div>
    </div>
  );
}

export default Converter;
