import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import App from './App'

import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>
)
