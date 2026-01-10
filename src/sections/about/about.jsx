import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowUturnUp } from 'react-icons/hi2';

import ViewfinderOverlay from '../../components/ViewFinderOverlay/ViewFinder';
import * as about from './styled';
import img1 from '../../assets/img/ft1.webp';
import img2 from '../../assets/img/ft2.webp';
import img3 from '../../assets/img/ft3.jpg';

const portfolioPhotos = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

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

export default function About({ id }) {
  const [activeBackground, setActiveBackground] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const viewportHeight = window.innerHeight;

    if (latest >= viewportHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  return (
    <>
      <about.DivNav
        variants={itemVariants}
        $hasImage={!!activeBackground}
        $isSticky={isSticky}
        id={id}
      >
        <about.NavLinks>
          <about.Link
            $hasImage={!!activeBackground}
            onClick={() => handleScrollTo('pricing')}
          >
            Pacotes
          </about.Link>
          <about.Link
            $hasImage={!!activeBackground}
            onClick={() => handleScrollTo('gallery')}
          >
            Galeria
          </about.Link>
          <about.Link
            $hasImage={!!activeBackground}
            onClick={() => handleScrollTo('testmonials')}
          >
            Testemunhos
          </about.Link>
          <about.Link
            $hasImage={!!activeBackground}
            onClick={() => handleScrollTo('contact')}
          >
            Contato
          </about.Link>
          <about.Link>
            <HiArrowUturnUp
              className="arrowTop"
              onClick={() => scrollToTop()}
            />
          </about.Link>
        </about.NavLinks>
      </about.DivNav>

      <about.AboutSection
        $bgImage={activeBackground}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ViewfinderOverlay />

        <about.DivContent variants={itemVariants}>
          <about.MyName variants={itemVariants}>
            Meu nome é Lucas Rafael Duarte
          </about.MyName>
          <about.Content variants={itemVariants}>
            Acredito que a fotografia vai além de clicar um botão; é sobre
            eternizar sentimentos que palavras não conseguem descrever.
          </about.Content>
          <about.Content variants={itemVariants}>
            Com um olhar focado em luz natural e emoções espontâneas, transformo
            seus dias especiais em memórias tangíveis.
          </about.Content>

          <about.Ass>
            <TypeAnimation
              sequence={['Lucas R. Duarte', 3000, '']}
              speed={5}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </about.Ass>
        </about.DivContent>

        <about.SideBarRight variants={itemVariants}>
          <about.ImgWrapper>
            {portfolioPhotos.map((photo) => (
              <about.Img
                key={photo.id}
                $src={photo.src}
                $isActive={activeBackground === photo.src}
                onClick={() => {
                  setActiveBackground((prev) =>
                    prev === photo.src ? null : photo.src,
                  );
                }}
              />
            ))}
          </about.ImgWrapper>
        </about.SideBarRight>

        <about.Clear
          $hasImage={!!activeBackground}
          onClick={() => setActiveBackground(null)}
        >
          Limpar
        </about.Clear>
      </about.AboutSection>
    </>
  );
}
