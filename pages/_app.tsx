import type { AppProps } from 'next/app'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'
 const client = new ApolloClient({
   cache: new InMemoryCache(),
   credentials: 'omit',
   link: new HttpLink({
     uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
 })// add process .env uri
})

// client.query({query})
// .then(result => {
//   console.log(result.data)
// })
export default function MyApp({ Component, pageProps }: AppProps) {
  return(
   <ApolloProvider client={client}>
   <Component {...pageProps} />
   </ApolloProvider>
   )
}