
import Icon from "@/components/ui/icon";

interface ContactMethodProps {
  icon: string;
  method?: string;
  contact: string;
}

const ContactMethod = ({ icon, method, contact }: ContactMethodProps) => (
  <div className="flex items-center">
    <div className="bg-wedding-green-200 p-2 rounded-full mr-3">
      <Icon name={icon} className="w-5 h-5 text-wedding-green-600" />
    </div>
    <div className="text-left">
      {method && <p className="text-sm text-wedding-green-600">{method}</p>}
      <p className="font-medium text-wedding-green-700">{contact}</p>
    </div>
  </div>
);

export default ContactMethod;
