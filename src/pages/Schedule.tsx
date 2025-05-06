
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Schedule = () => {
  return (
    <div className="bg-wedding-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-wedding-green-500 mb-4">Программа</h1>
            <div className="divider max-w-xs mx-auto mb-6"></div>
            <p className="text-wedding-green-600">Расписание нашего особенного дня</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-playfair text-2xl text-wedding-green-500 mb-6 text-center">
              12 августа 2025
            </h2>
            
            <div className="space-y-8">
              <TimelineEvent 
                time="14:30" 
                title="Сбор гостей"
                description="Приглашаем вас прибыть заранее, чтобы занять места до начала церемонии. На площадке будут приветственные напитки."
                icon="Users"
              />
              
              <TimelineEvent 
                time="15:00" 
                title="Церемония"
                description="Официальная церемония бракосочетания в Зеленой аллее Парка Горького."
                icon="HeartHandshake"
              />
              
              <TimelineEvent 
                time="15:45" 
                title="Фотосессия"
                description="Общая фотография со всеми гостями и семейные фото."
                icon="Camera"
              />
              
              <TimelineEvent 
                time="16:30" 
                title="Трансфер в ресторан"
                description="Организованный трансфер доставит всех гостей к месту проведения банкета."
                icon="Car"
              />
              
              <TimelineEvent 
                time="17:00" 
                title="Приветственный коктейль"
                description="Встреча гостей в ресторане 'Зелёный сад', легкие закуски и напитки."
                icon="GlassWater"
              />
              
              <TimelineEvent 
                time="18:00" 
                title="Начало банкета"
                description="Торжественный ужин, тосты и поздравления."
                icon="Utensils"
              />
              
              <TimelineEvent 
                time="20:00" 
                title="Первый танец молодоженов"
                description="Традиционный первый танец новобрачных."
                icon="Music"
              />
              
              <TimelineEvent 
                time="20:30" 
                title="Развлекательная программа"
                description="Конкурсы, живая музыка и танцы."
                icon="PartyPopper"
              />
              
              <TimelineEvent 
                time="22:00" 
                title="Свадебный торт"
                description="Разрезание свадебного торта и десерты."
                icon="Cake"
              />
              
              <TimelineEvent 
                time="00:00" 
                title="Завершение вечера"
                description="Официальное окончание торжества. Для желающих продолжить — ночная программа."
                icon="MoonStar"
              />
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl text-wedding-green-500 mb-4 flex items-center">
                <Icon name="Music" className="mr-2 h-5 w-5" />
                Музыкальное сопровождение
              </h3>
              <div className="space-y-3">
                <ScheduleItem 
                  title="Церемония" 
                  details="Струнный квартет 'Гармония'" 
                />
                <Separator />
                <ScheduleItem 
                  title="Коктейльный час" 
                  details="Пианист Алексей Иванов" 
                />
                <Separator />
                <ScheduleItem 
                  title="Банкет" 
                  details="Кавер-группа 'Green Notes'" 
                />
                <Separator />
                <ScheduleItem 
                  title="Вечеринка" 
                  details="DJ Михаил с программой хитов" 
                />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-xl text-wedding-green-500 mb-4 flex items-center">
                <Icon name="UtensilsCrossed" className="mr-2 h-5 w-5" />
                Праздничное меню
              </h3>
              <div className="space-y-3">
                <ScheduleItem 
                  title="Приветственные напитки" 
                  details="Игристое вино, фруктовые лимонады и канапе" 
                />
                <Separator />
                <ScheduleItem 
                  title="Закуски" 
                  details="Ассорти сыров, морепродукты, салаты" 
                />
                <Separator />
                <ScheduleItem 
                  title="Основные блюда" 
                  details="На выбор: стейк, рыба или вегетарианское блюдо" 
                />
                <Separator />
                <ScheduleItem 
                  title="Десерты" 
                  details="Свадебный торт и ассорти мини-десертов" 
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center bg-wedding-green-100 p-8 rounded-lg">
            <h3 className="font-playfair text-2xl text-wedding-green-500 mb-4">Особые пожелания</h3>
            <p className="text-wedding-green-600 mb-6">
              Если у вас есть пищевые аллергии, особые диетические требования или другие пожелания, 
              пожалуйста, сообщите нам об этом при подтверждении вашего присутствия.
            </p>
            <div className="flex justify-center space-x-4">
              <ContactMethod icon="Phone" method="Телефон" contact="+7 (999) 123-45-67" />
              <ContactMethod icon="Mail" method="Почта" contact="wedding@anna-mikhail.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент события программы
const TimelineEvent = ({ 
  time, 
  title, 
  description, 
  icon 
}: { 
  time: string; 
  title: string; 
  description: string; 
  icon: string;
}) => (
  <div className="flex">
    <div className="mr-6 flex flex-col items-center">
      <div className="bg-wedding-green-500 text-white py-1 px-3 rounded-md text-sm font-semibold w-16 text-center">
        {time}
      </div>
      <div className="w-0.5 h-full bg-wedding-green-300 my-2"></div>
    </div>
    <div className="flex-1">
      <div className="flex items-center mb-2">
        <Icon name={icon} className="w-5 h-5 text-wedding-green-500 mr-2" />
        <h4 className="font-playfair text-lg text-wedding-green-500">{title}</h4>
      </div>
      <p className="text-wedding-green-600">{description}</p>
    </div>
  </div>
);

// Компонент пункта расписания
const ScheduleItem = ({ title, details }: { title: string; details: string }) => (
  <div>
    <h5 className="font-medium text-wedding-green-600">{title}</h5>
    <p className="text-wedding-green-700">{details}</p>
  </div>
);

// Компонент контактного метода
const ContactMethod = ({ icon, method, contact }: { icon: string; method: string; contact: string }) => (
  <div className="flex items-center">
    <div className="bg-wedding-green-200 p-2 rounded-full mr-3">
      <Icon name={icon} className="w-5 h-5 text-wedding-green-600" />
    </div>
    <div className="text-left">
      <p className="text-sm text-wedding-green-600">{method}</p>
      <p className="font-medium text-wedding-green-700">{contact}</p>
    </div>
  </div>
);

export default Schedule;
