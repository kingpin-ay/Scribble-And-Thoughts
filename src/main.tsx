import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider , extendTheme } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider >
     <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
