import { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Albert Menéndez Portfolio</title>
        <meta name="description" content="Albert Menéndez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='min-h-screen'>
          <Nav />
          <div>
            <h2>Albert Menéndez González</h2>
            <h3>Software Developer</h3>
            <p>
              Freelancer provinding services for programming needs. Join me below and let's get in touch!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
