import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AnimatePresence } from 'framer-motion';

import ParticlesSection from '../../components/ParticlesSection/ParticlesSection';

import * as pricing from './styled';

const packageData = [
  {
    id: 1,
    title: 'Básico',
    price: '1.500,00',
    category: 'Casamento',
    isPremium: false,
    features: [
      '200 fotos',
      'Edição Básica',
      'Cobertura completa',
      '4h de evento',
    ],
  },

  {
    id: 2,
    title: 'Premium',
    price: '2.500,00',
    category: 'Casamento',
    isPremium: true,
    features: ['400 fotos', 'Edição avançada', 'Drone', 'Making Of'],
  },

  {
    id: 3,
    title: 'Intermediário',
    price: '1.900,00',
    category: 'Casamento',
    isPremium: false,
    features: [
      '300 fotos',
      'Edição completa',
      'Cobertura completa',
      '5h de evento',
    ],
  },

  {
    id: 4,
    title: 'Ensaio Pré',
    price: '800,00',
    category: 'Pré-Wedding',
    isPremium: false,
    features: [
      '50 fotos',
      '2 trocas de roupa',
      'Local externo',
      '2h de ensaio',
    ],
  },

  {
    id: 5,
    title: 'Civil VIP',
    price: '1.200,00',
    category: 'Civil + Mini Ensaio',
    isPremium: true,
    features: [
      'Cobertura cartório',
      'Mini ensaio externo',
      '100 fotos',
      'Álbum P',
    ],
  },

  {
    id: 6,
    title: 'Aniversário',
    price: '1.000,00',
    category: 'Eventos',
    isPremium: false,
    features: [
      '150 fotos',
      'Cobertura 4h',
      'Link Digital',
      'Tratamento básico',
    ],
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'relative',
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    top: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    position: 'absolute',
    transition: { duration: 0.6, ease: 'easeInOut' },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
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

export default function Pricing({ id }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 3;

  const nextStep = () => {
    setDirection(1);
    if (index + itemsPerPage < packageData.length) {
      setIndex(index + itemsPerPage);
    } else {
      setIndex(0);
    }
  };

  const prevStep = () => {
    setDirection(1);
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    } else {
      setIndex(
        Math.floor((packageData.length - 1) / itemsPerPage) * itemsPerPage,
      );
    }
  };

  const visiblePackages = packageData.slice(index, index + itemsPerPage);

  return (
    <ParticlesSection>
      <pricing.DivInformation
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <pricing.Title variants={itemVariants} id={id}>
          Pacotes
        </pricing.Title>
        <pricing.Information variants={itemVariants}>
          Confira abaixo, todos os pacotes oferecidos.
        </pricing.Information>
        <pricing.Information>
          Navegue livremente sobre eles e escolha o que mais combina com você.
        </pricing.Information>
      </pricing.DivInformation>

      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          minHeight: '800px',
        }}
      >
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <pricing.PricingDiv
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {visiblePackages.map((item) => (
              <pricing.CardPricing
                key={item.id}
                className={item.isPremium ? 'cardFloat' : ''}
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <pricing.Subtitle $isPremium={item.isPremium}>
                  {item.title} {item.isPremium && <FaStar className="star" />}
                </pricing.Subtitle>

                <pricing.PriceTitle $isPremium={item.isPremium}>
                  A partir de
                </pricing.PriceTitle>
                <pricing.Price $isPremium={item.isPremium}>
                  R$ {item.price}
                </pricing.Price>
                <pricing.Package $isPremium={item.isPremium}>
                  {item.category}
                </pricing.Package>

                <pricing.DivItems>
                  <pricing.ContentList $isPremium={item.isPremium}>
                    {item.features.map((feature, i) => (
                      <pricing.ListItems key={i}>
                        {item.isPremium
                          ? `Premium incluso: ${feature}`
                          : `Este pacote inclui: ${feature}`}
                      </pricing.ListItems>
                    ))}
                  </pricing.ContentList>
                </pricing.DivItems>

                <pricing.CTA
                  $isPremium={item.isPremium}
                  animate={item.isPremium ? { x: [0, -5, 5, -5, 5, 0] } : {}}
                  transition={
                    item.isPremium
                      ? {
                          duration: 0.5,
                          ease: 'easeInOut',
                          delay: 5,
                          repeat: Infinity,
                          repeatDelay: 5,
                        }
                      : { duration: 0.5, ease: 'easeInOut' }
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.isPremium ? 'Quero esse!' : 'Entrar em contato'}
                </pricing.CTA>
              </pricing.CardPricing>
            ))}
          </pricing.PricingDiv>
        </AnimatePresence>
      </div>

      <pricing.DivArrow>
        <IoIosArrowForward className="Arrow" onClick={nextStep} />
      </pricing.DivArrow>

      <pricing.DivArrow>
        <IoIosArrowBack className="Arrow1" onClick={prevStep} />
      </pricing.DivArrow>
    </ParticlesSection>
  );
}
