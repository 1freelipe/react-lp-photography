import React from 'react';

import * as gallery from './styled';
import ParticlesBlack from '../../components/ParticlesBlack/ParticlesBlack';

export default function Gallery() {
  return (
    <ParticlesBlack>
      <gallery.Container>
        <gallery.DivTitle>
          <gallery.Title>Portfólio Selecionado</gallery.Title>
          <gallery.Information>
            Eternizando momentos através de clicks
          </gallery.Information>
        </gallery.DivTitle>
      </gallery.Container>
    </ParticlesBlack>
  );
}
