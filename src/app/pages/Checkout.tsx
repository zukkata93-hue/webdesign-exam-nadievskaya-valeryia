import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle2, Package, CreditCard, MapPin } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
    paymentMethod: "card",
    deliveryTime: "asap",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    // Прокрутка вверх после оформления
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isOrderPlaced) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8F5E9" }}>
              <CheckCircle2 size={48} style={{ color: "#88B04B" }} />
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
              Заказ успешно оформлен!
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Номер вашего заказа: <span className="font-bold" style={{ color: "#FF6B8B" }}>#12345</span>
            </p>
            <p className="text-base lg:text-lg text-gray-500 mb-8">
              Мы свяжемся с вами в ближайшее время для подтверждения заказа.
              Букет будет доставлен по адресу: <strong>{formData.address}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: "#FF6B8B" }}
              >
                На главную
              </button>
              <button
                onClick={() => navigate("/catalog")}
                className="px-8 py-4 font-semibold rounded-lg transition-all hover:bg-opacity-10 min-h-[44px]"
                style={{
                  border: "2px solid #FF6B8B",
                  color: "#FF6B8B",
                  backgroundColor: "white",
                }}
              >
                Продолжить покупки
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <h1 className="text-[32px] lg:text-[48px] font-bold mb-6 lg:mb-10" style={{ color: "#2D2D2D" }}>
          Оформление заказа
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Форма */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Контактные данные */}
              <div className="bg-white rounded-xl p-6 lg:p-8" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Package size={24} style={{ color: "#FF6B8B" }} />
                  <h2 className="text-xl lg:text-2xl font-bold" style={{ color: "#2D2D2D" }}>
                    Контактные данные
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Имя и фамилия *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors min-h-[44px]"
                      placeholder="Иван Иванов"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors min-h-[44px]"
                      placeholder="+375 (29) 123-45-67"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Email (необязательно)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors min-h-[44px]"
                      placeholder="example@mail.com"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>
                </div>
              </div>

              {/* Адрес доставки */}
              <div className="bg-white rounded-xl p-6 lg:p-8" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={24} style={{ color: "#FF6B8B" }} />
                  <h2 className="text-xl lg:text-2xl font-bold" style={{ color: "#2D2D2D" }}>
                    Адрес доставки
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Адрес *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors min-h-[44px]"
                      placeholder="г. Минск, ул. Примерная, д. 1, кв. 1"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryTime" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Время доставки
                    </label>
                    <select
                      id="deliveryTime"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors min-h-[44px]"
                      style={{ borderColor: "#E0E0E0" }}
                    >
                      <option value="asap">Как можно скорее (2 часа)</option>
                      <option value="express">Экспресс доставка (1 час, +10 Br)</option>
                      <option value="morning">Утро (8:00 - 12:00)</option>
                      <option value="afternoon">День (12:00 - 17:00)</option>
                      <option value="evening">Вечер (17:00 - 22:00)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-semibold mb-2" style={{ color: "#2D2D2D" }}>
                      Комментарий к заказу
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-[#FF6B8B] transition-colors resize-none"
                      placeholder="Укажите дополнительные пожелания"
                      style={{ borderColor: "#E0E0E0" }}
                    />
                  </div>
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="bg-white rounded-xl p-6 lg:p-8" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard size={24} style={{ color: "#FF6B8B" }} />
                  <h2 className="text-xl lg:text-2xl font-bold" style={{ color: "#2D2D2D" }}>
                    Способ оплаты
                  </h2>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="w-5 h-5"
                      style={{ accentColor: "#FF6B8B" }}
                    />
                    <span className="font-semibold" style={{ color: "#2D2D2D" }}>Картой при получении</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="w-5 h-5"
                      style={{ accentColor: "#FF6B8B" }}
                    />
                    <span className="font-semibold" style={{ color: "#2D2D2D" }}>Наличными курьеру</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleChange}
                      className="w-5 h-5"
                      style={{ accentColor: "#FF6B8B" }}
                    />
                    <span className="font-semibold" style={{ color: "#2D2D2D" }}>Онлайн на сайте</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Итоговый блок */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-xl p-6 lg:p-8 sticky top-24"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-6" style={{ color: "#2D2D2D" }}>
                Ваш заказ
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары:</span>
                  <span className="font-semibold" style={{ color: "#2D2D2D" }}>
                    227,80 Br
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span className="font-semibold" style={{ color: "#88B04B" }}>
                    Бесплатно
                  </span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl lg:text-2xl font-bold">
                  <span style={{ color: "#2D2D2D" }}>Всего:</span>
                  <span style={{ color: "#FF6B8B" }}>227,80 Br</span>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 min-h-[44px] mb-4"
                style={{ backgroundColor: "#FF6B8B" }}
              >
                Подтвердить заказ
              </button>
              <button
                onClick={() => navigate("/cart")}
                className="w-full py-4 font-semibold rounded-lg transition-all hover:bg-opacity-10 min-h-[44px]"
                style={{
                  border: "2px solid #FF6B8B",
                  color: "#FF6B8B",
                  backgroundColor: "white",
                }}
              >
                Вернуться в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
