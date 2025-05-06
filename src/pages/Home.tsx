
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      {/* Основной контент */}
      <div className="container mx-auto py-16 px-4 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto">
          <div className="animate-fadeIn">
            <p className="text-wedding-green-600 font-medium mb-4">МЫ ПРИГЛАШАЕМ ВАС НА НАШУ СВАДЬБУ</p>
            
            <h1 className="font-playfair text-5xl md:text-7xl mb-6 text-wedding-green-500">
              Анна & Михаил
            </h1>
            
            <div className="divider mb-8 max-w-md mx-auto"></div>
            
            <p className="text-2xl md:text-3xl font-playfair mb-6 text-wedding-green-600">
              12 августа 2025
            </p>
            
            <p className="text-wedding-green-600 mb-10">
              Ресторан "Зелёный сад" • Москва
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-wedding-green-500 hover:bg-wedding-green-600 text-white" asChild>
                <Link to="/details">Детали свадьбы</Link>
              </Button>
              <Button className="bg-wedding-green-500 hover:bg-wedding-green-600 text-white" asChild>
                <Link to="/rsvp">Подтвердить участие</Link>
              </Button>
            </div>
          </div>
          
          {/* Счетчик до свадьбы */}
          <WeddingCountdown targetDate="2025-08-12" />
        </div>
      </div>
      
      {/* Информация о месте проведения */}
      <div className="bg-wedding-green-500 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">О нашей свадьбе</h2>
          <p className="max-w-2xl mx-auto mb-10 text-wedding-green-100">
            Мы с радостью приглашаем вас разделить с нами один из самых важных дней в нашей жизни.
            Наша свадьба пройдет в тёплой и уютной атмосфере, в окружении самых близких людей.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <InfoCard 
              title="Церемония" 
              details="15:00" 
              description="Парк Горького, Зеленая аллея" 
            />
            <InfoCard 
              title="Банкет" 
              details="17:00" 
              description="Ресторан 'Зелёный сад'" 
            />
            <InfoCard 
              title="Дресс-код" 
              details="Smart casual" 
              description="Приветствуются оттенки зеленого" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент обратного отсчета
const WeddingCountdown = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
      <h3 className="font-playfair text-wedding-green-500 text-xl mb-4">До нашего торжества осталось</h3>
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <TimeBox value={timeLeft.days} label="Дней" />
        <TimeBox value={timeLeft.hours} label="Часов" />
        <TimeBox value={timeLeft.minutes} label="Минут" />
        <TimeBox value={timeLeft.seconds} label="Секунд" />
      </div>
    </div>
  );
};

// Компонент для отображения времени в счетчике
const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="bg-wedding-green-500 text-white py-2 px-1 rounded-md mb-1">
      <span className="text-xl md:text-2xl font-semibold">{value}</span>
    </div>
    <span className="text-xs md:text-sm text-wedding-green-600">{label}</span>
  </div>
);

// Информационная карточка
const InfoCard = ({ title, details, description }: { title: string; details: string; description: string }) => (
  <div className="bg-wedding-green-600/50 p-6 rounded-lg">
    <h3 className="font-playfair text-xl mb-2">{title}</h3>
    <p className="text-wedding-gold font-semibold text-lg mb-1">{details}</p>
    <p className="text-wedding-green-100 text-sm">{description}</p>
  </div>
);

export default Home;
