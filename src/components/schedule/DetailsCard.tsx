
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import ScheduleItem from "./ScheduleItem";
import Icon from "@/components/ui/icon";

interface DetailsCardItem {
  title: string;
  details: string;
}

interface DetailsCardProps {
  title: string;
  icon: string;
  items: DetailsCardItem[];
}

const DetailsCard = ({ title, icon, items }: DetailsCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="font-playfair text-xl text-wedding-green-500 mb-4 flex items-center">
      <Icon name={icon} className="mr-2 h-5 w-5" />
      {title}
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ScheduleItem 
            title={item.title} 
            details={item.details} 
          />
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default DetailsCard;
