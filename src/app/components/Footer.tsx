import { Phone, Send, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white pt-12 pb-8 lg:pt-16 lg:pb-12">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+375291234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={18} />
                <span>+375 (29) 123-45-67</span>
              </a>
              <a href="https://t.me/flowers_by" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Send size={18} />
                <span>@flowers_by</span>
              </a>
              <a href="mailto:info@flowers.by" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail size={18} />
                <span>info@flowers.by</span>
              </a>
            </div>
          </div>

          {/* О магазине */}
          <div>
            <h3 className="text-lg font-bold mb-4">О магазине</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">О нас</Link></li>
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">Доставка и оплата</Link></li>
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">Отзывы</Link></li>
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">Партнерам</Link></li>
            </ul>
          </div>

          {/* Помощь */}
          <div>
            <h3 className="text-lg font-bold mb-4">Помощь</h3>
            <ul className="space-y-2">
              <li><Link to="/help?tab=faq" className="hover:opacity-80 transition-opacity">Часто задаваемые вопросы</Link></li>
              <li><Link to="/help?tab=care" className="hover:opacity-80 transition-opacity">Уход за цветами</Link></li>
              <li><Link to="/help?tab=return" className="hover:opacity-80 transition-opacity">Возврат и обмен</Link></li>
              <li><Link to="/help?tab=privacy" className="hover:opacity-80 transition-opacity">Политика конфиденциальности</Link></li>
            </ul>
          </div>

          {/* Мы в соцсетях */}
          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://t.me/flowers_by"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <Send size={28} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Подпишитесь, чтобы быть в курсе новинок и акций!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>© 2026 ЦВЕТЫ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
