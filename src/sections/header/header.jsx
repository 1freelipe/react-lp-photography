import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowDown } from 'react-icons/io';

import ParticleSection from '../../components/ParticlesSection/ParticlesSection';

import * as header from './styled';

export default function Header() {
  return (
    <ParticleSection>
      <header.DivNav>
        <header.Logo>Logo</header.Logo>
        <header.DivNavLinks>
          <header.NavLinks>
            <header.Link>Sobre</header.Link>
            <header.Link>Galeria</header.Link>
            <header.Link>Pacotes</header.Link>
            <header.Link>Depoimentos</header.Link>
            <header.Link>Contato</header.Link>
          </header.NavLinks>
        </header.DivNavLinks>

        <header.IconsWrapper>
          <header.Link $noUnderline>
            <FaWhatsapp className="wpp" />
          </header.Link>
          <header.Link $noUnderline>
            <FaInstagram className="instagram" />
          </header.Link>
          <header.Link $noUnderline>
            <GrFacebookOption className="facebook" />
          </header.Link>
          <header.Link $noUnderline>
            <FaTwitter className="twitter" />
          </header.Link>
        </header.IconsWrapper>
      </header.DivNav>

      <header.MainSection>
        <header.DivContent
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <header.MyName>Lucas Duarte Fotografias</header.MyName>

          {/*eslint-disable-next-line*/}
          <header.Content>"Registramos amor em imagens".</header.Content>
          <header.Content className="subtitle">
            Seja bem vindo ao meu portfólio!
          </header.Content>

          <header.ButtonWrapper>
            <header.ButtonP>Conheça mais</header.ButtonP>
            <header.ButtonC>Entre em Contato</header.ButtonC>
          </header.ButtonWrapper>
        </header.DivContent>
        <header.DivImage />
      </header.MainSection>

      <header.DivArrow
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.2 }}
      >
        <IoMdArrowDown className="arrow" />
      </header.DivArrow>
    </ParticleSection>
  );
}
