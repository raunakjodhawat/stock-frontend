import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBox() {
    const [tickerSymbol, changeTickerSymbol] = React.useState("");
    function onInput(e) {
        if(e.keyCode === 13) {
            console.log("enter pressed", tickerSymbol);
        }
    }
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
        <p>Stock Search</p>
      <TextField value={tickerSymbol} onChange={e => changeTickerSymbol(e.target.value)} onKeyDown={onInput} fullWidth label="Enter Stock ticker symbol" id="fullWidth" />
    </Box>
  );
}