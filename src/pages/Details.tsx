
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Details = () => {
  return (
    <div className="bg-wedding-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-wedding-green-500 mb-4">Детали свадьбы</h1>
            <div className="divider max-w-xs mx-auto mb-6"></div>
            <p className="text-wedding-green-600">Все, что вам нужно знать о нашем особенном дне</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <InfoSection 
              title="Церемония"
              time="15:00"
              location="Парк Горького, Зеленая аллея"
              mapUrl="https://goo.gl/maps/123"
              description="Церемония будет проходить под открытым небом в живописной части парка. Пожалуйста, приходите за 15-20 минут, чтобы занять свои места до начала церемонии."
              icon="HeartHandshake"
            />
            
            <InfoSection 
              title="Банкет"
              time="17:00"
              location="Ресторан 'Зелёный сад', ул. Лесная, 42"
              mapUrl="https://goo.gl/maps/456"
              description="После церемонии мы приглашаем вас на праздничный ужин. Вас ждут изысканные блюда, напитки и атмосфера радости и веселья."
              icon="Utensils"
            />
          </div>
          
          <div className="divider my-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <DetailCard
              title="Дресс-код"
              icon="Shirt"
              description="Smart casual в зеленых оттенках. Мужчинам рекомендуются костюмы, женщинам - коктейльные платья."
            />
            
            <DetailCard
              title="Подарки"
              icon="Gift"
              description="Ваше присутствие — лучший подарок для нас. Если хотите порадовать нас, мы будем рады финансовой помощи для нашего свадебного путешествия."
            />
            
            <DetailCard
              title="Транспорт"
              icon="Car"
              description="Между площадкой церемонии и рестораном будет организован трансфер. От метро 'Парк Культуры' до парка можно дойти пешком за 10 минут."
            />
          </div>
          
          <div className="mt-16 bg-wedding-green-100 p-8 rounded-lg">
            <h2 className="font-playfair text-3xl text-wedding-green-500 mb-6 text-center">Наша история</h2>
            
            <div className="space-y-8">
              <TimelineEvent 
                year="2021"
                title="Первая встреча"
                description="Мы познакомились на дне рождения общего друга. Михаил разлил напиток на платье Анны, и это стало началом нашей истории."
              />
              
              <TimelineEvent 
                year="2022"
                title="Первое свидание"
                description="После нескольких месяцев общения Михаил наконец пригласил Анну на свидание в ботанический сад."
              />
              
              <TimelineEvent 
                year="2023"
                title="Вместе путешествуем"
                description="Мы отправились в наше первое совместное путешествие по Европе, где поняли, что нам хорошо вместе."
              />
              
              <TimelineEvent 
                year="2024"
                title="Предложение"
                description="Во время пикника в том самом ботаническом саду Михаил сделал Анне предложение руки и сердца."
              />
              
              <TimelineEvent 
                year="2025"
                title="Наша свадьба"
                description="И вот мы приглашаем вас разделить с нами этот особенный день, чтобы начать новую главу нашей жизни."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент секции с информацией
const InfoSection = ({ 
  title, 
  time, 
  location, 
  mapUrl, 
  description, 
  icon 
}: { 
  title: string; 
  time: string; 
  location: string; 
  mapUrl: string; 
  description: string; 
  icon: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="bg-wedding-green-100 p-3 rounded-full mr-4">
        <Icon name={icon} className="w-6 h-6 text-wedding-green-500" />
      </div>
      <h2 className="font-playfair text-2xl text-wedding-green-500">{title}</h2>
    </div>
    
    <div className="ml-16">
      <p className="text-xl text-wedding-green-600 font-medium mb-2">{time}</p>
      <p className="text-wedding-green-700 mb-2">{location}</p>
      <a 
        href={mapUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center text-wedding-green-500 hover:text-wedding-green-600 mb-4"
      >
        <Icon name="MapPin" className="w-4 h-4 mr-1" />
        <span>Посмотреть на карте</span>
      </a>
      <p className="text-wedding-green-600">{description}</p>
    </div>
  </div>
);

// Компонент карточки с деталями
const DetailCard = ({ title, icon, description }: { title: string; icon: string; description: string }) => (
  <Card className="bg-white">
    <CardContent className="pt-6">
      <div className="text-center">
        <div className="bg-wedding-green-100 p-3 rounded-full inline-block mb-4">
          <Icon name={icon} className="w-6 h-6 text-wedding-green-500" />
        </div>
        <h3 className="font-playfair text-xl text-wedding-green-500 mb-3">{title}</h3>
        <p className="text-wedding-green-600">{description}</p>
      </div>
    </CardContent>
  </Card>
);

// Компонент события временной шкалы
const TimelineEvent = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="flex">
    <div className="mr-6 flex flex-col items-center">
      <div className="bg-wedding-green-500 text-white py-1 px-3 rounded-md text-sm font-semibold">
        {year}
      </div>
      <div className="w-0.5 h-full bg-wedding-green-300 my-2"></div>
    </div>
    <div className="flex-1">
      <h4 className="font-playfair text-lg text-wedding-green-500 mb-2">{title}</h4>
      <p className="text-wedding-green-600">{description}</p>
    </div>
  </div>
);

export default Details;
