
import ContactMethod from "./ContactMethod";

interface SpecialNotesProps {
  title: string;
  description: string;
  contacts: Array<{
    icon: string;
    method: string;
    contact: string;
  }>;
}

const SpecialNotes = ({ title, description, contacts }: SpecialNotesProps) => (
  <div className="mt-16 text-center bg-wedding-green-100 p-8 rounded-lg">
    <h3 className="font-playfair text-2xl text-wedding-green-500 mb-4">{title}</h3>
    <p className="text-wedding-green-600 mb-6">{description}</p>
    <div className="flex justify-center space-x-4">
      {contacts.map((contact, index) => (
        <ContactMethod
          key={index}
          icon={contact.icon}
          method={contact.method}
          contact={contact.contact}
        />
      ))}
    </div>
  </div>
);

export default SpecialNotes;
