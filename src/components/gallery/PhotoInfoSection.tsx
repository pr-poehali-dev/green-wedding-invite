
const PhotoInfoSection = () => {
  return (
    <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
      <h3 className="font-playfair text-2xl text-wedding-green-500 mb-4 text-center">
        Фотосъемка на нашей свадьбе
      </h3>
      <p className="text-wedding-green-600 mb-6 text-center">
        На нашей свадьбе будет работать профессиональный фотограф. Также мы будем очень рады, 
        если вы поделитесь с нами своими снимками этого прекрасного дня.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard 
          title="Хэштег свадьбы"
          description="Используйте наш свадебный хэштег, чтобы мы могли найти все ваши публикации с торжества в социальных сетях."
          highlight="#АннаИМихаил2025"
        />
        
        <InfoCard 
          title="Общий фотоальбом"
          description="После свадьбы мы создадим общий облачный альбом, где вы сможете увидеть все профессиональные фотографии и добавить свои."
          highlight="Ссылка будет доступна здесь после свадьбы"
          highlightIsLink={false}
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  description: string;
  highlight: string;
  highlightIsLink?: boolean;
}

const InfoCard = ({ title, description, highlight, highlightIsLink = false }: InfoCardProps) => (
  <div className="bg-wedding-green-50 p-6 rounded-lg">
    <h4 className="font-playfair text-xl text-wedding-green-500 mb-3">
      {title}
    </h4>
    <p className="text-wedding-green-600 mb-3">
      {description}
    </p>
    {highlightIsLink ? (
      <a href={highlight} className="block bg-wedding-green-100 py-2 px-4 rounded-lg text-center font-medium text-wedding-green-600 hover:bg-wedding-green-200 transition-colors">
        {highlight}
      </a>
    ) : (
      <div className={`${highlight.startsWith('#') ? 'bg-wedding-green-100 py-2 px-4 rounded-lg text-center' : ''} font-medium text-wedding-green-600`}>
        {highlight}
      </div>
    )}
  </div>
);

export default PhotoInfoSection;
