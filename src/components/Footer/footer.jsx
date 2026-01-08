import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';

import * as footer from './styled';

export default function Footer() {
  return (
    <footer.Container>
      <footer.Title>Acompanhe as redes</footer.Title>
      <footer.IconsWrapper>
        <FaWhatsapp className="whats" />
        <FaInstagram className="insta" />
        <FaTwitter className="twitter" />
        <GrFacebookOption className="face" />
      </footer.IconsWrapper>

      <footer.SubFooter>
        <footer.Information>Todos os direitos reservados</footer.Information>
      </footer.SubFooter>
    </footer.Container>
  );
}
