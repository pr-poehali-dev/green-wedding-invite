
export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

export interface ScheduleDetail {
  title: string;
  details: string;
}

export const timelineEvents: TimelineItem[] = [
  {
    time: "14:30",
    title: "Сбор гостей",
    description: "Приглашаем вас прибыть заранее, чтобы занять места до начала церемонии. На площадке будут приветственные напитки.",
    icon: "Users"
  },
  {
    time: "15:00",
    title: "Церемония",
    description: "Официальная церемония бракосочетания в Зеленой аллее Парка Горького.",
    icon: "HeartHandshake"
  },
  {
    time: "15:45",
    title: "Фотосессия",
    description: "Общая фотография со всеми гостями и семейные фото.",
    icon: "Camera"
  },
  {
    time: "16:30",
    title: "Трансфер в ресторан",
    description: "Организованный трансфер доставит всех гостей к месту проведения банкета.",
    icon: "Car"
  },
  {
    time: "17:00",
    title: "Приветственный коктейль",
    description: "Встреча гостей в ресторане 'Зелёный сад', легкие закуски и напитки.",
    icon: "GlassWater"
  },
  {
    time: "18:00",
    title: "Начало банкета",
    description: "Торжественный ужин, тосты и поздравления.",
    icon: "Utensils"
  },
  {
    time: "20:00",
    title: "Первый танец молодоженов",
    description: "Традиционный первый танец новобрачных.",
    icon: "Music"
  },
  {
    time: "20:30",
    title: "Развлекательная программа",
    description: "Конкурсы, живая музыка и танцы.",
    icon: "PartyPopper"
  },
  {
    time: "22:00",
    title: "Свадебный торт",
    description: "Разрезание свадебного торта и десерты.",
    icon: "Cake"
  },
  {
    time: "00:00",
    title: "Завершение вечера",
    description: "Официальное окончание торжества. Для желающих продолжить — ночная программа.",
    icon: "MoonStar"
  }
];

export const musicDetails = [
  { title: "Церемония", details: "Струнный квартет 'Гармония'" },
  { title: "Коктейльный час", details: "Пианист Алексей Иванов" },
  { title: "Банкет", details: "Кавер-группа 'Green Notes'" },
  { title: "Вечеринка", details: "DJ Михаил с программой хитов" }
];

export const menuDetails = [
  { title: "Приветственные напитки", details: "Игристое вино, фруктовые лимонады и канапе" },
  { title: "Закуски", details: "Ассорти сыров, морепродукты, салаты" },
  { title: "Основные блюда", details: "На выбор: стейк, рыба или вегетарианское блюдо" },
  { title: "Десерты", details: "Свадебный торт и ассорти мини-десертов" }
];

export const contactInfo = [
  { icon: "Phone", method: "Телефон", contact: "+7 (999) 123-45-67" },
  { icon: "Mail", method: "Почта", contact: "wedding@anna-mikhail.com" }
];
