import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Company from './verticalAppBarComponents/Company';
import StockSummary from './verticalAppBarComponents/StockSummary';

const pages = ['COMPANY', 'STOCK SUMMARY', 'CHARTS', 'LATEST NEWS'];

const ResponsiveAppBar = ({tickerInfo}) => {
  const [selectedIndex, changeSelectIndex] = React.useState(0);

  const handleNavClick = (event) => {
    changeSelectIndex(pages.indexOf(event.target.innerText));
  };

  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <br />
    {selectedIndex === 0 && <Company companyInfo={tickerInfo.companyInfo} />}
    {selectedIndex === 1 && <StockSummary companyQuote={tickerInfo.companyQuote} recommendation={tickerInfo.recommendation}/>}
    </div>
  );
};
export default React.memo(ResponsiveAppBar);
