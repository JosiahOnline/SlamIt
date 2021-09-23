import Head from 'next/head'
import Teams from '../components/Teams'
import Image from 'next/image'
import heroes from '../public/bg1.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Slam Dunk Mobile</title>
        <meta name='keywords' content='slam dunk mobile, slam dunk gaming'/>
      </Head>
      <Image className="style.bg"
      src={heroes} 
      alt="Shohoku Players"
      layout="intrinsic"
      />
        <Teams />
    </div>
    )
  }