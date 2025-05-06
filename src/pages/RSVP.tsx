
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
    guests: "0",
    dietaryRestrictions: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, attending: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, guests: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Спасибо за ваш ответ!",
        description: "Мы получили ваше подтверждение и ждем встречи с вами на нашей свадьбе.",
      });
    }, 1500);
  };
  
  return (
    <div className="bg-wedding-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl text-wedding-green-500 mb-4">
              Подтверждение участия
            </h1>
            <div className="divider max-w-xs mx-auto mb-6"></div>
            <p className="text-wedding-green-600">
              Пожалуйста, подтвердите ваше присутствие до 15 июля 2025 года
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-wedding-green-100 p-4 rounded-full">
                  <Icon name="CheckCheck" className="w-12 h-12 text-wedding-green-500" />
                </div>
              </div>
              <h2 className="font-playfair text-2xl text-wedding-green-500 mb-4">
                Ваш ответ получен!
              </h2>
              <p className="text-wedding-green-600 mb-6">
                Благодарим за ваш ответ. Мы очень рады, что вы будете с нами в этот особенный день.
                До скорой встречи на нашей свадьбе!
              </p>
              <Button 
                variant="outline" 
                className="border-wedding-green-300 text-wedding-green-600 hover:bg-wedding-green-50"
                onClick={() => setIsSubmitted(false)}
              >
                Изменить ответ
              </Button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Анна Иванова"
                      required
                      className="border-wedding-green-200 focus-visible:ring-wedding-green-500"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anna@example.com"
                      required
                      className="border-wedding-green-200 focus-visible:ring-wedding-green-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="border-wedding-green-200 focus-visible:ring-wedding-green-500"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Сможете ли вы присутствовать?</Label>
                  <RadioGroup 
                    value={formData.attending} 
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="yes" 
                        id="attending-yes" 
                        className="text-wedding-green-500 border-wedding-green-200 focus:ring-wedding-green-500"
                      />
                      <Label htmlFor="attending-yes" className="cursor-pointer">С радостью буду</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="no" 
                        id="attending-no" 
                        className="text-wedding-green-500 border-wedding-green-200 focus:ring-wedding-green-500"
                      />
                      <Label htmlFor="attending-no" className="cursor-pointer">К сожалению, не смогу</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {formData.attending === "yes" && (
                  <>
                    <div className="space-y-3">
                      <Label htmlFor="guests">Количество сопровождающих</Label>
                      <Select 
                        value={formData.guests} 
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger 
                          id="guests" 
                          className="border-wedding-green-200 focus:ring-wedding-green-500"
                        >
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Только я</SelectItem>
                          <SelectItem value="1">+ 1 гость</SelectItem>
                          <SelectItem value="2">+ 2 гостя</SelectItem>
                          <SelectItem value="3">+ 3 гостя</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="dietaryRestrictions">Пищевые ограничения или аллергии</Label>
                      <Textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        placeholder="Укажите, если у вас или ваших гостей есть пищевые ограничения"
                        className="border-wedding-green-200 focus-visible:ring-wedding-green-500"
                      />
                    </div>
                  </>
                )}
                
                <div className="space-y-3">
                  <Label htmlFor="message">Сообщение для молодоженов (необязательно)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ваши пожелания или вопросы"
                    className="border-wedding-green-200 focus-visible:ring-wedding-green-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-wedding-green-500 hover:bg-wedding-green-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : formData.attending === "yes" ? (
                    "Подтвердить участие"
                  ) : (
                    "Отправить ответ"
                  )}
                </Button>
              </form>
            </div>
          )}
          
          <div className="mt-16 bg-wedding-green-100 p-8 rounded-lg text-center">
            <h3 className="font-playfair text-2xl text-wedding-green-500 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-wedding-green-600 mb-6">
              Если у вас остались вопросы по организации или вам нужна дополнительная информация,
              свяжитесь с нами любым удобным способом.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <ContactMethod icon="Phone" contact="+7 (999) 123-45-67" />
              <ContactMethod icon="Mail" contact="wedding@anna-mikhail.com" />
              <ContactMethod icon="MessageCircle" contact="@annmikhail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Компонент контактного метода
const ContactMethod = ({ icon, contact }: { icon: string; contact: string }) => (
  <div className="flex items-center justify-center">
    <div className="bg-wedding-green-200 p-2 rounded-full mr-3">
      <Icon name={icon} className="w-5 h-5 text-wedding-green-600" />
    </div>
    <span className="text-wedding-green-700 font-medium">{contact}</span>
  </div>
);

export default RSVP;
