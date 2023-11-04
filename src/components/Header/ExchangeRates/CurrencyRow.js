import './CurrencyRow.css'
import React from 'react'

function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props;

  return (
    <div className='currencyRow'>
      <input
        type='number'
        className='input'
        value={amount.toString()} 
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;