import Head from 'next/head'
import { Global, css } from '@emotion/core'

// Components:
import Header from '../components/Header'


const Home = () => {
  return (
    <>
      <Head>
        <title>Search News | 🕵🏽‍♀️</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
          }

          body {
            color: #120136;
          }

          img {
            width: 100%
          }
        `}
      />
    </>
  )
}

export default Home