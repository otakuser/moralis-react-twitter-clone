import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});

const appId = 'fH4X1pAuiSntEbwQnsvLfB6CbPM4kZPH0ZamatCF';
const serverUrl = 'https://9vxsl7bzdgs8.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
