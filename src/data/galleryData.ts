
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const categories = [
  { id: "love", name: "Наша история" },
  { id: "preparation", name: "Подготовка" },
  { id: "details", name: "Детали" },
  { id: "venue", name: "Место проведения" }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1537907510278-a818dfe90e42?q=80&w=1964&auto=format&fit=crop",
    alt: "Романтическая фотография пары в парке",
    category: "love"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?q=80&w=1964&auto=format&fit=crop",
    alt: "Красивое свадебное платье",
    category: "preparation"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    alt: "Цветочные композиции",
    category: "details"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop",
    alt: "Обручальные кольца",
    category: "details"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529636798458-92a513fed058?q=80&w=1969&auto=format&fit=crop",
    alt: "Свадебный торт",
    category: "details"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600107916910-0ec8a24df389?q=80&w=1974&auto=format&fit=crop",
    alt: "Оформление зала",
    category: "venue"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
    alt: "Свадебный букет",
    category: "details"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1528823855199-f62e041076a5?q=80&w=2071&auto=format&fit=crop",
    alt: "Пара на фоне заката",
    category: "love"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    alt: "Танец жениха и невесты",
    category: "love"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1505236269375-e0942bff7b40?q=80&w=2128&auto=format&fit=crop", 
    alt: "Свадебный декор",
    category: "venue"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    alt: "Счастливая пара",
    category: "love"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1572985025058-f90fa13adc2e?q=80&w=1974&auto=format&fit=crop",
    alt: "Подготовка к свадьбе",
    category: "preparation"
  },
];
