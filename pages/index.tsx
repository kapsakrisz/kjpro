import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


const Home: NextPage = () => {
  return (
    <div className="bg-[#00597B] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>K.J Professional painting and decorating</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero/>

      </section>

      <section id='about' className="snap-center">
       <About/> 
      </section>

      

      <section id='projects' className="snap-start">
     <Projects/>

      </section>
      <section id='contact' className="snap-start">
        <ContactMe/>
      </section>

      
    </div>
  )
}

export default Home
