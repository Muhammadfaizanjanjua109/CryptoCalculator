import * as React from 'react';
import './style.css';

export default function App() {
  const [modal, setModal] = React.useState({
    TotalMoneyInve: 10000,
    purchasingRateDollar: 205,
    purchasingRateCyrpto: 269,
    sellingRateDollar: 220,
    sellingRateCrypto: 305,
  });
  const [profit, setProfit] = React.useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setModal((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeSubmit = (e) => {
    e.preventDefault();

    const totalMoneyInvestedDollars =
      modal.TotalMoneyInve / modal.purchasingRateDollar;
    console.log(totalMoneyInvestedDollars, 'totalMoneyInvestedDollars');
    const totalCryptoBuying =
      totalMoneyInvestedDollars / modal.purchasingRateCyrpto;
    console.log(totalCryptoBuying, 'totalCryptoBuying');
    const totalCryptoProfit = totalCryptoBuying * modal.sellingRateCrypto;
    console.log(totalCryptoProfit, 'totalCryptoProfit');
    const totalEarning = totalCryptoProfit * modal.sellingRateDollar;
    console.log(totalEarning, 'totalEarning');
   
    setProfit(totalEarning);
  };
  return (
    <div>
      <form>
        <label>Enter Total Money in RS</label>
        <input
          type="number"
          onChange={handleChange}
          value={modal.TotalMoneyInve}
          name="TotalMoneyInve"
        />
        <br />
        <label>Purchasing Rate Dollar</label>
        <input
          type="number"
          onChange={handleChange}
          value={modal.purchasingRateDollar}
          name="purchasingRateDollar"
        />
        <br />

        <label>Purchasing Rate of Crypto</label>
        <input
          type="number"
          onChange={handleChange}
          value={modal.purchasingRateCyrpto}
          name="purchasingRateCyrpto"
        />
        <br />
        <label>Selling Rate of Dollar</label>
        <input
          type="number"
          onChange={handleChange}
          value={modal.sellingRateDollar}
          name="sellingRateDollar"
        />
        <br />
        <label>Selling Rate of Crypto</label>
        <input
          type="number"
          onChange={handleChange}
          value={modal.sellingRateCrypto}
          name="sellingRateCrypto"
        />
        <button onClick={(e) => handleChangeSubmit(e)}>Submit</button>
      </form>
      <p>Your Answer is </p>
      {profit && profit}
    </div>
  );
}
