import { useNavigate } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 90 ? 0 : 10;
  const total = subtotal + deliveryFee;

  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",") + " Br";
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFF0F3" }}>
              <ShoppingBag size={48} style={{ color: "#FF6B8B" }} />
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
              Корзина пуста
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Добавьте букеты из каталога, чтобы оформить заказ
            </p>
            <button
              onClick={() => navigate("/catalog")}
              className="px-8 py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: "#FF6B8B" }}
            >
              Перейти в каталог
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <h1 className="text-[32px] lg:text-[48px] font-bold mb-6 lg:mb-10" style={{ color: "#2D2D2D" }}>
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Список товаров */}
          <div className="lg:col-span-2">
            <div className="space-y-4 lg:space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-4 lg:p-6 flex gap-4 lg:gap-6"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                      {item.name}
                    </h3>
                    <p className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#FF6B8B" }}>
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-4">
                      {/* Количество */}
                      <div className="flex items-center gap-2 border-2 rounded-lg" style={{ borderColor: "#FF6B8B" }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 lg:p-3 transition-opacity hover:opacity-70"
                          style={{ color: "#FF6B8B" }}
                          aria-label="Уменьшить количество"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="w-8 text-center font-semibold" style={{ color: "#2D2D2D" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 lg:p-3 transition-opacity hover:opacity-70"
                          style={{ color: "#FF6B8B" }}
                          aria-label="Увеличить количество"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                      {/* Удалить */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 lg:p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Удалить из корзины"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  {/* Итого за товар (мобильная версия скрыта) */}
                  <div className="hidden lg:block text-right">
                    <p className="text-sm text-gray-500 mb-1">Итого:</p>
                    <p className="text-2xl font-bold" style={{ color: "#2D2D2D" }}>
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Итоговый блок */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-xl p-6 lg:p-8 sticky top-24"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-6" style={{ color: "#2D2D2D" }}>
                Итого
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары:</span>
                  <span className="font-semibold" style={{ color: "#2D2D2D" }}>
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span className="font-semibold" style={{ color: deliveryFee === 0 ? "#88B04B" : "#2D2D2D" }}>
                    {deliveryFee === 0 ? "Бесплатно" : formatPrice(deliveryFee)}
                  </span>
                </div>
                {subtotal < 90 && (
                  <p className="text-sm pt-2" style={{ color: "#88B04B" }}>
                    До бесплатной доставки осталось {formatPrice(90 - subtotal)}
                  </p>
                )}
                <div className="border-t pt-3 flex justify-between text-xl lg:text-2xl font-bold">
                  <span style={{ color: "#2D2D2D" }}>Всего:</span>
                  <span style={{ color: "#FF6B8B" }}>{formatPrice(total)}</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 min-h-[44px] mb-4"
                style={{ backgroundColor: "#FF6B8B" }}
              >
                Оформить заказ
              </button>
              <button
                onClick={() => navigate("/catalog")}
                className="w-full py-4 font-semibold rounded-lg transition-all hover:bg-opacity-10 min-h-[44px]"
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
    </div>
  );
}
