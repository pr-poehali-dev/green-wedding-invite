
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Закрывать меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-wedding-green-500 text-white py-4 relative">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="font-playfair text-xl md:text-2xl font-semibold">
            Анна & Михаил
          </Link>
          
          {/* Мобильное меню */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-wedding-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex gap-6">
            <NavLink to="/" label="Главная" />
            <NavLink to="/details" label="Детали" />
            <NavLink to="/schedule" label="Программа" />
            <NavLink to="/gallery" label="Галерея" />
            <NavLink to="/rsvp" label="Подтверждение" />
          </nav>
        </div>
        
        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-wedding-green-500 z-50 py-4 shadow-lg animate-fadeIn md:hidden">
            <nav className="flex flex-col items-center gap-4">
              <NavLink to="/" label="Главная" />
              <NavLink to="/details" label="Детали" />
              <NavLink to="/schedule" label="Программа" />
              <NavLink to="/gallery" label="Галерея" />
              <NavLink to="/rsvp" label="Подтверждение" />
            </nav>
          </div>
        )}
      </header>
      
      <main className="flex-1 relative">
        <Outlet />
      </main>
      
      <footer className="bg-wedding-green-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4 font-playfair text-xl">Анна & Михаил</p>
          <p className="text-wedding-green-100">С нетерпением ждем встречи с вами!</p>
          <p className="mt-4 text-sm text-wedding-green-200">© {new Date().getFullYear()} • 12 августа 2025</p>
        </div>
      </footer>
    </div>
  );
};

// Компонент навигационной ссылки
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors hover:text-wedding-gold ${
        isActive ? 'text-wedding-gold' : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
};

export default Layout;
