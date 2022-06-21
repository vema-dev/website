import Layout from '../components/Layout';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Nav from '../components/nav';

export default function Home() {
  return (
    <Layout pageTitle='Vema Solutions'>
      <Hero />
      <Nav />
      <div className='section__wrapper'>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}
