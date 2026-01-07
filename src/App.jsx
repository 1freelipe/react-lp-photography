import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './sections/header/header';
import About from './sections/about/about';
import Pricing from './sections/pricing/Pricing';
import Gallery from './sections/gallery/gallery';
import Testmonials from './sections/testmonials/testmonials';
import Contact from './sections/contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header id="home" />
      <About id="about" />
      <Pricing id="pricing" />
      <Gallery id="gallery" />
      <Testmonials id="testmonials" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
