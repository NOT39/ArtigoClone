import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { ArticleContextProvider } from './contexts/ArticleContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={defaultTheme}>
    <ArticleContextProvider>
      <App />
      <GlobalStyle />
    </ArticleContextProvider>
  </ThemeProvider>,
  // </React.StrictMode>,
)
