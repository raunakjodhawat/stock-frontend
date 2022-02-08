import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { getCompanyInformation, getCompanyQuote, getRecommendation, getNews, getCandle } from '../services';
import ResponsiveAppBar from './VerticalAppBar';

export default function InputWithIcon() {
    const [tickerSymbol, setTickerSymbol] = useState("");
    const [tickerInfo, setTickerInfo] = useState({
        tickerSymbol: "",
        companyInfo: {},
        companyQuote: {},
        recommendation: {},
        news: {},
        candle: {}
    });

    const pr = (fn) => {
        return fn(tickerSymbol).then((response) => response).catch((error) => {
            console.error(error);
        });
    }
    const onSearchButtonClick = async () => {
        const response = await Promise.all([pr(getCompanyInformation), pr(getCompanyQuote), pr(getRecommendation), pr(getCandle), pr(getNews)]).then((values) => values);
        setTickerInfo({
            tickerSymbol,
            companyInfo: response[0],
            companyQuote: response[1],
            recommendation: response[2],
            candle: response[3],
            news: response[4]
        });
    }

    return (
        <Box m={1}>
            <TextField
                label="Enter Stock ticker"
                onChange={e => setTickerSymbol(e.target.value)}
                value={tickerSymbol}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button edge="end" color="primary" onClick={onSearchButtonClick}>
                                Search
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
            <br />
            <br />
            <ResponsiveAppBar tickerInfo={tickerInfo} />
        </Box>
    );
}
