/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CatEyes from '../components/CatEyes'
import Slider from '../components/Slider'

export default function Home({facts}) {
  return (
    <div>
      <Head>
        <title>Did you know?</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className={styles.container}>
          <CatEyes />
          <Slider facts={facts}/>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://catfact.ninja/facts?max_length=100&limit=20', { method: 'GET' })
	const json = await res.json()
  const facts = await json.data

	return {
		props: {
			facts,
		},
	}
}