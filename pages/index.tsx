import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className='block h-10 w-10 text-white hover:animate-bounce '>jdahkda</h1> */}
      <Header />
      <Navbar />
     
    </>

  )
}

export default Home