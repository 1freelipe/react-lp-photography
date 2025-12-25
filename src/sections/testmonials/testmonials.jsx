import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

import * as test from './styled';
import ParticlesSection from '../../components/ParticlesSection/ParticlesSection';

const testimonials = [
  {
    id: 1,
    name: 'Mariana & Pedro',
    event: 'Casamento',
    text: 'Não tenho palavras para descrever! O Lucas conseguiu capturar cada emoção do nosso casamento de forma tão natural. Ele nos deixou super à vontade e o resultado foi um álbum que parece um filme.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Ricardo Oliveira',
    event: 'Corporativo',
    text: 'Profissionalismo nota 10. As fotos do nosso evento ficaram com uma luz perfeita e foram entregues super rápido. O olhar dele conseguiu valorizar muito a nossa marca.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Julia Souza',
    event: 'Ensaio Pessoal',
    text: 'Eu sempre fui travada para fotos, mas o ensaio foi tão leve que nem vi o tempo passar. O Lucas dirige a gente super bem e as fotos ficaram incríveis, me senti linda!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'Carla Mendes',
    event: 'Aniversário Infantil',
    text: 'Impressionante a paciência com as crianças! Ele conseguiu registrar sorrisos espontâneos do meu filho que não para quieto um segundo. Eternizou o aniversário de 1 aninho com perfeição.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 5,
    name: 'Fernanda & Thiago',
    event: 'Pré-Wedding',
    text: 'Nosso pré-wedding foi uma experiência mágica. O Lucas tem um olhar artístico diferenciado, transformou um lugar simples em um cenário de cinema. Estamos apaixonados pelas fotos!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 6,
    name: 'Patrícia Gomes',
    event: 'Bodas de Prata',
    text: 'Já é o terceiro evento que fazemos com o Lucas e a qualidade só melhora. É aquele fotógrafo que a gente confia de olhos fechados para não perder nenhum detalhe importante.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
];

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
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export default function Testmonials({ id }) {
  return (
    <ParticlesSection>
      <test.DivTitle
        id={id}
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <test.Title variants={itemVariants}>
          O que meus clientes estão dizendo?
        </test.Title>
        <test.Information variants={itemVariants}>
          Confira abaixo algumas avaliações sobre os meus serviços.
        </test.Information>
      </test.DivTitle>

      <test.DivContent>
        {testimonials.map((item) => (
          <test.CardTest key={item.id}>
            <test.ImgClient src={item.image} />
            <test.StarWrapper>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </test.StarWrapper>

            <test.ClientName>{item.name}</test.ClientName>
            <test.EventName>{item.event}</test.EventName>
            <FaQuoteLeft className="quote" />
            <test.ClientComent>{item.text}</test.ClientComent>
          </test.CardTest>
        ))}
      </test.DivContent>
    </ParticlesSection>
  );
}
