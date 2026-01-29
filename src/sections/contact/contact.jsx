import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import * as contact from './styled';
import ParticlesBlack from '../../components/ParticlesBlack/ParticlesBlack';
import ContactImg from '../../assets/img/perfil.jpeg';

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
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const sobrenome = formData.get('sobrenome');
    const servico = formData.get('servico');
    const faq = formData.get('duvidas');

    const msg = `Olá, Lucas! meu nome é ${nome} ${sobrenome}, gostaria de saber mais sobre o pacote de ${servico}. ${faq}`;
    const url = `https://api.whatsapp.com/send?phone=19999458014&text=${encodeURIComponent(msg)}`;

    const opened = window.open(url, '_blank');

    if (opened) {
      e.target.reset();
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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
          Entre em contato conosco da maneira que preferir.
        </contact.Information>
      </contact.DivTitle>

      <contact.Container
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <contact.ContactContainer>
          <contact.ContactImage variants={itemVariants}>
            <img
              src={ContactImg}
              loading="lazy"
              alt="Foto do fotógrafo, olhando para o lado e sorrindo descontraído."
            />
          </contact.ContactImage>
          <contact.Information className="infoContact" variants={itemVariants}>
            O formulário levará todas as suas dúvidas diretamente ao{' '}
            <span>WhatsApp</span> do fotógrafo.
          </contact.Information>

          <contact.Form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleForm}
          >
            <contact.Title className="secondTitle" variants={itemVariants}>
              Suas Informações
            </contact.Title>
            <contact.NameLastName>
              <contact.NameInput
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                variants={itemVariants}
                className="nome"
              />
              <contact.LastName
                type="text"
                placeholder="Sobrenome"
                variants={itemVariants}
                name="sobrenome"
              />
            </contact.NameLastName>
            <contact.Service
              type="text"
              placeholder="Serviço desejado"
              variants={itemVariants}
              name="servico"
            />
            <contact.Faq
              as="textarea"
              placeholder="Dúvidas correlatas"
              variants={itemVariants}
              name="duvidas"
            />

            <contact.Button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              variants={itemVariants}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Enviar mensagem'}
            </contact.Button>
          </contact.Form>
        </contact.ContactContainer>
        <contact.LocationContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <contact.Information variants={itemVariants}>
            Agende sua visita e venha conhecer diretamente o estúdio
          </contact.Information>
          <contact.Information variants={itemVariants}>
            Estamos localizados na Rua: Amaral Peixoto Nº 131 - Jardim Santa
            Elisa
          </contact.Information>

          <contact.MapContainer variants={itemVariants}>
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

          <contact.IconsWrapper variants={itemVariants}>
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
