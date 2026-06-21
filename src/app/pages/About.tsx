import { Flower2, Heart, Truck, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Flower2,
      title: "Свежие цветы",
      description: "Мы работаем только с проверенными поставщиками, цветы к нам поступают каждое утро свежими и красивыми.",
    },
    {
      icon: Heart,
      title: "С любовью к клиентам",
      description: "Каждый заказ мы готовим с особым вниманием и заботой, учитывая все пожелания клиента.",
    },
    {
      icon: Truck,
      title: "Быстрая доставка",
      description: "Доставляем цветы по Минску за 2 часа. Работаем без выходных с 8:00 до 22:00.",
    },
    {
      icon: Award,
      title: "Высокое качество",
      description: "Гарантируем свежесть цветов не менее 7 дней. Если что-то не так – вернем деньги.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Заголовок */}
        <h1 className="text-[32px] lg:text-[48px] font-bold mb-6 lg:mb-10" style={{ color: "#2D2D2D" }}>
          О магазине
        </h1>

        {/* Основная информация */}
        <div className="mb-12 lg:mb-16">
          <div className="prose max-w-none">
            <p className="text-lg lg:text-xl mb-6" style={{ color: "#666" }}>
              Цветочный магазин "ЦВЕТЫ" работает в Минске с 2018 года. За это время мы собрали команду
              профессиональных флористов и доставили тысячи букетов нашим клиентам.
            </p>
            <p className="text-lg lg:text-xl mb-6" style={{ color: "#666" }}>
              Мы специализируемся на свежих розах, пионах, хризантемах и других цветах. В ассортименте
              более 50 сортов цветов, а также горшечные растения и подарочные наборы.
            </p>
            <p className="text-lg lg:text-xl mb-6" style={{ color: "#666" }}>
              Наша миссия – дарить радость и делать каждый день ярче с помощью красивых цветов.
            </p>
          </div>
        </div>

        {/* Наши ценности */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-10" style={{ color: "#2D2D2D" }}>
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ backgroundColor: "#FFF0F3" }}>
                    <IconComponent size={40} style={{ color: "#FF6B8B" }} className="lg:w-12 lg:h-12" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3" style={{ color: "#2D2D2D" }}>
                    {value.title}
                  </h3>
                  <p className="text-base" style={{ color: "#666" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Доставка и оплата */}
        <div className="mb-12 lg:mb-16 p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#F9F9F9" }}>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8" style={{ color: "#2D2D2D" }}>
            Доставка и оплата
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>Доставка</h3>
              <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                <li>• По Минску – от 5 Br</li>
                <li>• Бесплатная доставка от 90 Br</li>
                <li>• Доставка за 2 часа</li>
                <li>• Работаем с 8:00 до 22:00 без выходных</li>
                <li>• Возможна экспресс-доставка за 60 минут (+10 Br)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>Оплата</h3>
              <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                <li>• Наличными курьеру</li>
                <li>• Картой при получении</li>
                <li>• Онлайн на сайте</li>
                <li>• Перевод на карту</li>
                <li>• Безналичный расчет для юрлиц</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#E8F5E9" }}>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-8" style={{ color: "#2D2D2D" }}>
            Контакты
          </h2>
          <div className="space-y-4 text-base lg:text-lg" style={{ color: "#2D2D2D" }}>
            <p><strong>Телефон:</strong> <a href="tel:+375291234567" className="hover:opacity-80" style={{ color: "#FF6B8B" }}>+375 (29) 123-45-67</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@flowers.by" className="hover:opacity-80" style={{ color: "#FF6B8B" }}>info@flowers.by</a></p>
            <p><strong>Telegram:</strong> <a href="https://t.me/flowers_by" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" style={{ color: "#FF6B8B" }}>@flowers_by</a></p>
            <p><strong>Адрес:</strong> г. Минск, ул. Цветочная, 15</p>
            <p><strong>Режим работы:</strong> Ежедневно с 8:00 до 22:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
