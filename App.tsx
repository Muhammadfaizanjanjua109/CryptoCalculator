import * as React from 'react';
import './style.css';

export default function App() {
  const [modal, setModal] = React.useState({
    TotalMoneyInve: 0,
    purchasingRateDollar: 0,
    purchasingRateCyrpto: 0,
    sellingRateDollar: 0,
    sellingRateCrypto: 0,
  });
  const [profit, setProfit] = React.useState({
    totalMoney:null,
    totalProfit:null
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setModal((prev) => ({ ...prev, [name]: value }));
  };
  const handleChangeSubmit = (e) => {
    e.preventDefault();

    const totalMoneyInvestedDollars =
      modal.TotalMoneyInve / modal.purchasingRateDollar;
 
    const totalCryptoBuying =
      totalMoneyInvestedDollars / modal.purchasingRateCyrpto;
  
    const totalCryptoProfit = totalCryptoBuying * modal.sellingRateCrypto;
 
    const totalEarning = totalCryptoProfit * modal.sellingRateDollar;
  
   const totp=totalEarning-modal.TotalMoneyInve
    setProfit((prev)=>({
      ...prev, totalMoney:totalEarning,
      totalProfit:totp
    })    );
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
         <button onClick={(e) => handleChangeSubmit(e)}>clear</button>
        <button onClick={(e) => handleChangeSubmit(e)}>Submit</button>
      </form>
      <p>Congratulation You Earned </p>
      <p>{profit.totalProfit && profit.totalProfit}</p>  
      <p>Now You have total Money </p>
      <p>{profit.totalMoney && profit.totalMoney}</p> 
    </div>
  );
}
