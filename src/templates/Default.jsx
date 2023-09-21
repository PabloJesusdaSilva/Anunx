"use client"

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Default = ({ children }) => {
  return(
    <>
      <Header />
      <div className='mt-14 mb-20'>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Default;