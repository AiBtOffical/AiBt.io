import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';


const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      {/*<BusinessModel />*/}
      {/*<Tokenomics />*/}
      {/*<Roadmap/>*/}
    </Layout>
  );
};

export default Home;