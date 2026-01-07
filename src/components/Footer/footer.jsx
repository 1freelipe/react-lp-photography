import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';

import * as footer from './styled';

export default function Footer() {
  return (
    <footer.Container>
      <footer.Title>Acompanhe as redes</footer.Title>
      <footer.IconsWrapper>
        <FaWhatsapp />
        <FaInstagram />
        <FaTwitter />
        <GrFacebookOption />
      </footer.IconsWrapper>

      <footer.SubFooter>
        <footer.Information>Todos os direitos reservados</footer.Information>
      </footer.SubFooter>
    </footer.Container>
  );
}
