import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import { useEffect, useState } from 'react';

export default function Home({explorerData, cardData}) {
  const [hideNav, setHideNav] = useState(false);
  const changeNav = () => {
    if(window.scrollY >= 100){
        setHideNav(true)
    }else{
        setHideNav(false)
    }
  }
  useEffect(() => {
      window.addEventListener('scroll', changeNav)
  }, []);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header style={{display: !hideNav && 'none'}} className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 transition-all transform duration-300 ease-in-out'>
        <Header />
      </header>
      

      {/* Banner */}
      <Banner />

      {/* Hero Area */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* Explore Nearby */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              explorerData?.map((item, id )=> (
                <SmallCard item={item} key={id} />
              ))
            }
          </div>
        </section>

        {/* Live Anywhere */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className="flex space-x-3 p-3 -ml-3 overflow-x-scroll scrollbar-hide">
            {
              cardData?.map((item, id) => (
                <MediumCard item={item} key={id} />
              ))
            }
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttonText='Get inspired'
        />
      </main>

      <Footer />
    </div>
  )
}


export async function getStaticProps(){
  const explorerData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  const cardData = await fetch('https://links.papareact.com/zp1').then(res => res.json());

  return {
    props: {
      explorerData,
      cardData
    }
  }
}