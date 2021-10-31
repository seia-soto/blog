import type { AppProps } from 'next/app'
import { globals } from '../styles/theme'
import { wrapper } from '../stores'

import 'normalize.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globals()

  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
