import * as React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function App() {
  const inital_modal = {
    TotalMoneyInve: '',
    purchasingRateDollar: '',
    purchasingRateCyrpto: '',
    sellingRateDollar: '',
    sellingRateCrypto: '',
  };
  const [modal, setModal] = React.useState(inital_modal);
  const [profit, setProfit] = React.useState({
    totalMoney: null,
    totalProfit: null,
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

    const totp = totalEarning - modal.TotalMoneyInve;
    setProfit((prev) => ({
      ...prev,
      totalMoney: totalEarning,
      totalProfit: totp,
    }));
  };
  return (
    <div>
      <Typography variant="h4" component="h4" textAlign={'center'} color={'green'}>
 Enter Details of Play
</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              onChange={handleChange}
              sx={{ paddingTop: '10px', marginTop: '20px' }}
              value={modal.TotalMoneyInve}
              name="TotalMoneyInve"
              label="Enter Total Money in RS"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              onChange={handleChange}
              sx={{ paddingTop: '10px', marginTop: '20px' }}
              value={modal.purchasingRateDollar}
              name="purchasingRateDollar"
              label="Purchasing Rate Dollar"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              onChange={handleChange}
              value={modal.purchasingRateCyrpto}
              sx={{ paddingTop: '10px', marginTop: '20px' }}
              name="purchasingRateCyrpto"
              label="Purchasing Rate of Crypto"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              onChange={handleChange}
              value={modal.sellingRateDollar}
              sx={{ paddingTop: '10px', marginTop: '20px' }}
              name="sellingRateDollar"
              label="Selling Rate of Dollar"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              onChange={handleChange}
              value={modal.sellingRateCrypto}
              sx={{ paddingTop: '10px', marginTop: '20px' }}
              name="sellingRateCrypto"
              label="Selling Rate of Crypto"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}   sx={{ paddingTop: '10px', marginTop: '40px' }}>
          <Button
          variant="outlined"
          color="error"
          onClick={() => setModal(inital_modal)}
        >
          Clear
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={(e) => handleChangeSubmit(e)}
        >
          Submit
        </Button>
          </Grid>
        </Grid>


      </form>
      <p>Congratulation You Earned </p>
      <p>{profit.totalProfit && profit.totalProfit}</p>
      <p>Now You have total Money </p>
      <p>{profit.totalMoney && profit.totalMoney}</p>
    </div>
  );
}
