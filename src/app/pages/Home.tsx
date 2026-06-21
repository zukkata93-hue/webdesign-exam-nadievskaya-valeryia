import { useState } from "react";
import { useNavigate } from "react-router";
import { Truck, Clock, Gift, Flower2, Leaf, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

const heroImage = "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzk1NTc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  {
    id: 1,
    name: "Розы",
    icon: Flower2,
  },
  {
    id: 2,
    name: "Пионы",
    icon: Flower2,
  },
  {
    id: 3,
    name: "Горшечные растения",
    icon: Leaf,
  },
  {
    id: 4,
    name: "Подарочные наборы",
    icon: Gift,
  },
];

const products = [
  {
    id: 1,
    name: "Нежность",
    price: "49,90 Br",
    image: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzk1NTc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 2,
    name: "Алые паруса",
    price: "89,00 Br",
    originalPrice: "111,25 Br",
    image: "https://images.unsplash.com/photo-1660809412526-e012e51e2c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXQlMjBsdXh1cnl8ZW58MXx8fHwxNzc5NTYxMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: "-20%",
  },
  {
    id: 3,
    name: "Пионовый рай",
    price: "65,50 Br",
    image: "https://images.unsplash.com/photo-1511201173873-c327e63eb6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9ueSUyMGZsb3dlcnMlMjBib3VxdWV0JTIwcGFzdGVsfGVufDF8fHx8MTc3OTU2MTMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 4,
    name: "Белоснежка",
    price: "55,00 Br",
    image: "https://images.unsplash.com/photo-1570112008549-e4181988109f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJvc2VzJTIwYm91cXVldCUyMHdlZGRpbmd8ZW58MXx8fHwxNzc5NTYxMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
];

const benefits = [
  {
    id: 1,
    icon: Truck,
    title: "Бесплатная доставка от 90 Br",
  },
  {
    id: 2,
    icon: Clock,
    title: "Свежесть цветов 7 дней",
  },
  {
    id: 3,
    icon: ShoppingBag,
    title: "Индивидуальная упаковка",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <div className="bg-white">
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      {/* Hero секция */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Текстовый блок */}
            <div className="order-1 lg:order-1">
              <h1 className="text-[32px] lg:text-[48px] font-bold leading-tight mb-4 lg:mb-6" style={{ color: "#2D2D2D" }}>
                Свежие цветы с доставкой за 2 часа
              </h1>
              <p className="text-lg lg:text-xl mb-6 lg:mb-8" style={{ color: "#666" }}>
                Букеты из более чем 50 сортов роз, пионов и хризантем
              </p>
              <button
                onClick={() => navigate("/catalog")}
                className="w-full lg:w-auto px-8 py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: "#FF6B8B" }}
              >
                Выбрать букет
              </button>
            </div>

            {/* Изображение */}
            <div className="order-2 lg:order-2">
              <img
                src={heroImage}
                alt="Красивый букет цветов"
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-6 lg:py-10" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center" style={{ color: "#2D2D2D" }}>
            Выберите категорию
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => navigate(`/catalog?category=${encodeURIComponent(category.name)}`)}
                  className="bg-white rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:shadow-lg"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFF0F3" }}>
                    <IconComponent size={32} style={{ color: "#FF6B8B" }} className="lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold text-center" style={{ color: "#2D2D2D" }}>
                    {category.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Хиты продаж */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 text-center" style={{ color: "#2D2D2D" }}>
            Популярные букеты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl"
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 lg:h-72 object-cover"
                  />
                  {product.discount && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-white font-bold text-sm"
                      style={{ backgroundColor: "#FF6B8B" }}
                    >
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold mb-2" style={{ color: "#2D2D2D" }}>
                    {product.name}
                  </h3>
                  <div className="mb-4">
                    {product.discount ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xl lg:text-2xl font-bold" style={{ color: "#FF6B8B" }}>
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl lg:text-2xl font-bold" style={{ color: "#2D2D2D" }}>
                        {product.price}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.currentTarget.classList.add("animate-pulse-scale");
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: parseFloat(product.price.replace(",", ".").replace(" Br", "")),
                        image: product.image,
                      });
                      setToastMessage(`"${product.name}" добавлен в корзину`);
                      setShowToast(true);
                      setTimeout(() => {
                        e.currentTarget.classList.remove("animate-pulse-scale");
                      }, 200);
                    }}
                    className="w-full py-3 rounded-lg font-semibold transition-all min-h-[44px] hover:shadow-md active:scale-95"
                    style={{
                      border: "2px solid #FF6B8B",
                      color: "#FF6B8B",
                      backgroundColor: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFF0F3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="flex flex-col items-center text-center gap-4 lg:gap-6"
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E8F5E9" }}>
                    <IconComponent size={40} style={{ color: "#88B04B" }} className="lg:w-12 lg:h-12" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold px-4" style={{ color: "#2D2D2D" }}>
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
