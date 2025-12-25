import photo1 from '../../assets/img/ft1.webp';
import photo2 from '../../assets/img/ft2.webp';

const rawPortfolio = {
  Casamento: [photo1, photo2, photo1, photo2],
  Aniversário: [photo1, photo2, photo1, photo2],
  Eventos: [photo1, photo2, photo1, photo2],
  'Pré-Wedding': [photo1, photo2, photo1, photo2],
  Infantil: [photo1, photo2, photo1, photo2],
};

export const allPhotos = Object.entries(rawPortfolio).flatMap(
  ([category, images]) => {
    return images.map((imgSrc, index) => ({
      id: `${category}-${index}`,
      src: imgSrc,
      category: category,
    }));
  },
);

export const categoriesList = ['Todos', ...Object.keys(rawPortfolio)];
