
interface ScheduleItemProps {
  title: string;
  details: string;
}

const ScheduleItem = ({ title, details }: ScheduleItemProps) => (
  <div>
    <h5 className="font-medium text-wedding-green-600">{title}</h5>
    <p className="text-wedding-green-700">{details}</p>
  </div>
);

export default ScheduleItem;
