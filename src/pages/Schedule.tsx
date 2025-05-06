import { Separator } from "@/components/ui/separator";
import Timeline from "@/components/schedule/Timeline";
import DetailsCard from "@/components/schedule/DetailsCard";
import SpecialNotes from "@/components/schedule/SpecialNotes";
import { 
timelineEvents, 
musicDetails, 
menuDetails, 
contactInfo 
} from "@/data/scheduleData";

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
            
            <Timeline events={timelineEvents} />
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <DetailsCard 
              title="Музыкальное сопровождение" 
              icon="Music" 
              items={musicDetails} 
            />
            
            <DetailsCard 
              title="Праздничное меню" 
              icon="UtensilsCrossed" 
              items={menuDetails} 
            />
          </div>
          
          <SpecialNotes 
            title="Особые пожелания"
            description="Если у вас есть пищевые аллергии, особые диетические требования или другие пожелания, 
              пожалуйста, сообщите нам об этом при подтверждении вашего присутствия."
            contacts={contactInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;