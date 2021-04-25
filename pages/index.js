import CommonHead from '../components/CommonHead'


import Layout from "../components/Layout"
import Link from "next/link"
import {useState} from "react"
import { AnimatePresence, motion } from "framer-motion"

import Image from 'next/Image'

function Home({data}) {

  const [style, setStyle] = useState({display: 'none'});


  return (
    <div>
      <CommonHead></CommonHead>
      <Layout>
     
        <div style={style}>안녕하세요</div>

        <motion.img layoutId="finnqmarket-saving" src="/images/main_visual.jpg" alt="" animate={{ x: 0, opacity: 1 }} />



        <Link href="/finnqmarket-saving"><a  onMouseEnter={e => {
                     //setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     //setStyle({display: 'none'})
                 }}>{data.stargazers_count}</a></Link>
      </Layout>
    </div>
  
  )
}
/*
Home.getInitialProps  = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
*/

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/repos/vercel/next.js`)
  const json = await res.json()

  return { props: {  data: json } }
}

export default Home;