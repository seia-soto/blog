import type { AppProps /*, AppContext */ } from 'next/app'

import '../styles/fonts.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
