import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme = {theme}>  {/* //resetCSS ja vem como padrão */}
    {/* <ChakraProvider resetCSS theme = {theme}> */}

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
