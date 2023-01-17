import '../styles/globals.css'
import { motion } from "framer-motion"
import { Heebo } from '@next/font/google'

const heebo = Heebo({
  subsets: ['bold'],
  weight: ["400", "700"]
})




function MyApp({ Component, pageProps }) {
  return (
  <main>  
    <div className='App'/>
      <Component {...pageProps} />

      </main>
  )
}

export default MyApp