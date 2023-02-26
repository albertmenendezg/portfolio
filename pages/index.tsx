import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Elements/Navbar/Navbar'
import Experience from '../components/Elements/Experience/Experience';
import Home from '../components/Elements/Home/Home';
import Skills from '../components/Elements/Skills/Skills';
import About from '../components/Elements/About/About';

const index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Albert Menéndez Portfolio</title>
        <meta name="description" content="Albert Menéndez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-800 w-full min-h-screen px-4 text-white'>
        <Navbar />
        <div className='md:px-24 flex flex-col'>
          <Home />
          <About />
          <Skills />
          <Experience />
        </div>
      </main>
    </>
  )
}

export default index
