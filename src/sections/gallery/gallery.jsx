import React, { useState, useMemo } from 'react';
import { IoClose } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { allPhotos, categoriesList } from './allPhotos';
import * as gallery from './styled';
import ParticlesBlack from '../../components/ParticlesBlack/ParticlesBlack';

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

export default function Gallery({ id }) {
  const [selectedId, setSelectedId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      /*eslint-disable-next-line */
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const allPhotosShuffled = useMemo(() => shuffleArray(allPhotos), []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Todos') return allPhotosShuffled.slice(0, 12);
    return allPhotos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory, allPhotosShuffled]);

  return (
    <ParticlesBlack>
      <gallery.DivTitle
        id={id}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <gallery.Title variants={itemVariants}>
          Portfólio Selecionado
        </gallery.Title>
        <gallery.Information variants={itemVariants}>
          {`"Eternizando momentos através de clicks."`}
        </gallery.Information>
        <gallery.Information variants={itemVariants}>
          Navegue pelas diferentes <strong>categorias</strong> para visualizar
          <strong> todas as fotos</strong>.
        </gallery.Information>
      </gallery.DivTitle>

      <gallery.NavLinks
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <gallery.NavList>
          {categoriesList.map((cat) => (
            <gallery.Links
              key={cat}
              $isActive={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </gallery.Links>
          ))}
        </gallery.NavList>
      </gallery.NavLinks>

      <gallery.MainGallery>
        <gallery.PhotoGrid
          variants={containerVariants}
          initial="hidden"
          key={activeCategory}
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <gallery.PhotoItem
                key={photo.id}
                variants={itemVariants}
                onClick={() => setSelectedId(photo.id)}
                layoutId={`photo-${photo.id}`}
                layout
              >
                <img src={photo.src} loading="lazy" />
              </gallery.PhotoItem>
            ))}
          </AnimatePresence>
        </gallery.PhotoGrid>

        <AnimatePresence>
          {selectedId && (
            <gallery.ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              {allPhotos.map((photo) => {
                if (photo.id !== selectedId) return null;

                return (
                  <gallery.ModalContent
                    key={photo.id}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <gallery.CloseButton onClick={() => setSelectedId(null)}>
                      <IoClose />
                    </gallery.CloseButton>

                    <gallery.ExpandedImage
                      src={photo.src}
                      latoutId={`photo-${photo.id}`}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  </gallery.ModalContent>
                );
              })}
            </gallery.ModalOverlay>
          )}
        </AnimatePresence>
      </gallery.MainGallery>

      <gallery.Footer variants={itemVariants}>
        <TypeAnimation
          sequence={[
            '©Todos os Direitos Reservados - Lucas Duarte Fotografias',
            3000,
            '',
          ]}
          speed={5}
          repeat={Infinity}
          wrapper="span"
          cursor={true}
        />
      </gallery.Footer>
    </ParticlesBlack>
  );
}
