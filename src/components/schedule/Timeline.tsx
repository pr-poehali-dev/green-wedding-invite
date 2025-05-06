
import TimelineEvent from "./TimelineEvent";
import { TimelineItem } from "@/data/scheduleData";

interface TimelineProps {
  events: TimelineItem[];
}

const Timeline = ({ events }: TimelineProps) => (
  <div className="space-y-8">
    {events.map((event, index) => (
      <TimelineEvent 
        key={index}
        time={event.time}
        title={event.title}
        description={event.description}
        icon={event.icon}
      />
    ))}
  </div>
);

export default Timeline;
