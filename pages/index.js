import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from 'react';
import Button from '@material-tailwind/react/Button';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Button color="lightBlue" ripple="light">Button</Button>

      <Footer />
    </div>
  )
}
