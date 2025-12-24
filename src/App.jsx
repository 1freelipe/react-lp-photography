import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './sections/header/header';
import About from './sections/about/about';
import Pricing from './sections/pricing/Pricing';
import Gallery from './sections/gallery/gallery';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Pricing />
      <Gallery />
    </>
  );
}

export default App;
