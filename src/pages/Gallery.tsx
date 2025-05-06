
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const imageGallery = [
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
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredImages = activeCategory 
    ? imageGallery.filter(img => img.category === activeCategory) 
    : imageGallery;
  
  const categories = [
    { id: "love", name: "Наша история" },
    { id: "preparation", name: "Подготовка" },
    { id: "details", name: "Детали" },
    { id: "venue", name: "Место проведения" }
  ];
  
  return (
    <div className="bg-wedding-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-wedding-green-500 mb-4">
              Галерея
            </h1>
            <div className="divider max-w-xs mx-auto mb-6"></div>
            <p className="text-wedding-green-600 max-w-2xl mx-auto">
              Здесь собраны наши самые любимые и красивые моменты. После свадьбы мы поделимся 
              с вами фотографиями с торжества.
            </p>
          </div>
          
          {/* Категории фотографий */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === null 
                  ? 'bg-wedding-green-500 text-white' 
                  : 'bg-wedding-green-100 text-wedding-green-600 hover:bg-wedding-green-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              Все фото
            </button>
            
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-wedding-green-500 text-white' 
                    : 'bg-wedding-green-100 text-wedding-green-600 hover:bg-wedding-green-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Галерея изображений */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(image.src)}
              >
                <AspectRatio ratio={1 / 1}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
          
          {/* Пустое состояние, если нет изображений в категории */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg mt-8">
              <p className="text-wedding-green-600">Фотографии для этой категории скоро появятся.</p>
            </div>
          )}
          
          {/* Информация о фотосъемке на свадьбе */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-playfair text-2xl text-wedding-green-500 mb-4 text-center">
              Фотосъемка на нашей свадьбе
            </h3>
            <p className="text-wedding-green-600 mb-6 text-center">
              На нашей свадьбе будет работать профессиональный фотограф. Также мы будем очень рады, 
              если вы поделитесь с нами своими снимками этого прекрасного дня.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-wedding-green-50 p-6 rounded-lg">
                <h4 className="font-playfair text-xl text-wedding-green-500 mb-3">
                  Хэштег свадьбы
                </h4>
                <p className="text-wedding-green-600 mb-3">
                  Используйте наш свадебный хэштег, чтобы мы могли найти все ваши публикации 
                  с торжества в социальных сетях.
                </p>
                <div className="bg-wedding-green-100 py-2 px-4 rounded-lg text-center font-medium text-wedding-green-600">
                  #АннаИМихаил2025
                </div>
              </div>
              
              <div className="bg-wedding-green-50 p-6 rounded-lg">
                <h4 className="font-playfair text-xl text-wedding-green-500 mb-3">
                  Общий фотоальбом
                </h4>
                <p className="text-wedding-green-600 mb-3">
                  После свадьбы мы создадим общий облачный альбом, где вы сможете увидеть все 
                  профессиональные фотографии и добавить свои.
                </p>
                <p className="text-wedding-green-700 font-medium">
                  Ссылка будет доступна здесь после свадьбы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Модальное окно для просмотра полного изображения */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <img 
            src={selectedImage || ''} 
            alt="Фото в полном размере" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
