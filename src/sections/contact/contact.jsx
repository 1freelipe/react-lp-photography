import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import * as contact from './styled';
import ParticlesBlack from '../../components/ParticlesBlack/ParticlesBlack';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export default function Contact({ id }) {
  return (
    <ParticlesBlack>
      <contact.DivTitle
        id={id}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <contact.Title variants={itemVariants}>Formas de Contato</contact.Title>
        <contact.Information variants={itemVariants}>
          Entre em contato conosco da forma que preferir.
        </contact.Information>
      </contact.DivTitle>

      <contact.Container>
        <contact.ContactContainer>
          <contact.Information className="infoContact">
            O formulário levará todas as suas dúvidas diretamente ao{' '}
            <span>WhatsApp</span> do fotógrafo.
          </contact.Information>

          <contact.Form>
            <contact.NameLastName>
              <contact.NameInput type="text" placeholder="Digite seu nome" />
              <contact.LastName type="text" placeholder="Sobrenome" />
            </contact.NameLastName>
            <contact.Service type="text" placeholder="Serviço desejado" />
            <contact.Faq placeholder="Dúvidas correlatas" />

            <contact.Button>Enviar</contact.Button>
          </contact.Form>
        </contact.ContactContainer>
        <contact.LocationContainer>
          <contact.Information>
            Agende sua visita e venha conhecer diretamente o estúdio
          </contact.Information>
          <contact.Information>
            Estamos localizados na Rua: Amaral Peixoto Nº 131 - Jardim Santa
            Elisa
          </contact.Information>

          <contact.MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7659098775334!2d-44.096646325530166!3d-22.51296442391345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea2a718b619fd%3A0xe8da930a4b3488ba!2sAv.%20Amaral%20Peixoto%2C%20131%20-%20Centro%2C%20Volta%20Redonda%20-%20RJ%2C%2027253-222!5e0!3m2!1spt-BR!2sbr!4v1767809186641!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </contact.MapContainer>

          <contact.IconsWrapper>
            <contact.Wrapper>
              <FaInstagram className="insta" />{' '}
              <contact.Information>@lucasduartefotografias</contact.Information>
            </contact.Wrapper>
            <contact.Wrapper>
              <FaWhatsapp className="whats" />
              <contact.Information>(19) 99912-4523</contact.Information>
            </contact.Wrapper>
          </contact.IconsWrapper>
        </contact.LocationContainer>
      </contact.Container>
    </ParticlesBlack>
  );
}
