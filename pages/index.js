import Head from 'next/head'
import { Global, css } from '@emotion/core'

// Components:
import Header from '../components/Header'
import CardArticle from '../components/CardArticle'


const Home = ({ data }) => {

  const { status, articles } = data

  return (
    <>
      <Head>
        <title>Search News | 🕵🏽‍♀️</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <CardArticle
        articles={articles}
      />

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

export async function getServerSideProps() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=tecnolog%C3%ADa&language=es&apiKey=${process.env.API_KEY}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default Home