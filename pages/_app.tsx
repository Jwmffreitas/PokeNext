import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: white;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
