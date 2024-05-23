import React from 'react'
import "../styles/globals.scss"
import { Layout } from '../components';

export default function App({ Component, pageProps }) {

  return (
    <div id="content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>

  )
}
