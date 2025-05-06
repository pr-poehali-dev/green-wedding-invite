
import Icon from "@/components/ui/icon";

interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
  icon: string;
}

const TimelineEvent = ({ time, title, description, icon }: TimelineEventProps) => (
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

export default TimelineEvent;
