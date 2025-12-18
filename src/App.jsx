import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './sections/header/header';
import About from './sections/about/about';
import Pricing from './sections/pricing/Pricing';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Pricing />
    </>
  );
}

export default App;
