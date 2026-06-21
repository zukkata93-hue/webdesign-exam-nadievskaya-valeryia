import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Каталог", path: "/catalog" },
    { name: "О магазине", path: "/about" },
    { name: "Помощь", path: "/help" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Логотип */}
          <Link to="/" className="text-2xl lg:text-3xl font-bold" style={{ color: "#FF6B8B" }}>
            ЦВЕТЫ
          </Link>

          {/* Десктоп меню */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "font-semibold"
                    : "hover:opacity-70"
                }`}
                style={{ color: isActive(item.path) ? "#FF6B8B" : "#2D2D2D" }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/cart"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: isActive("/cart") ? "#FF6B8B" : "#2D2D2D" }}
            >
              <ShoppingCart size={24} />
              <span className="font-semibold">Корзина</span>
            </Link>
          </nav>

          {/* Мобильное меню - кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: "#FF6B8B" }}
            aria-label="Меню"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Мобильное меню - выпадающее */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 text-lg transition-colors ${
                    isActive(item.path) ? "font-semibold" : ""
                  }`}
                  style={{ color: isActive(item.path) ? "#FF6B8B" : "#2D2D2D" }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-lg flex items-center gap-2"
                style={{ color: isActive("/cart") ? "#FF6B8B" : "#2D2D2D" }}
              >
                <ShoppingCart size={24} />
                <span className={isActive("/cart") ? "font-semibold" : ""}>Корзина</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
