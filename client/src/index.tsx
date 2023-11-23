import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';
import { RuffHouseProvider } from './Context/ruffHouse';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RuffHouseProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </RuffHouseProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
