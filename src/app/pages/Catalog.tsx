import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Filter } from "lucide-react";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast";

const products = [
  {
    id: 1,
    name: "Нежность",
    price: "49,90 Br",
    category: "Розы",
    image: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwZWxlZ2FudHxlbnwxfHx8fDE3Nzk1NTc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 2,
    name: "Алые паруса",
    price: "89,00 Br",
    originalPrice: "111,25 Br",
    category: "Розы",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc5NTMwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: "-20%",
  },
  {
    id: 3,
    name: "Пионовый рай",
    price: "65,50 Br",
    category: "Пионы",
    image: "https://images.unsplash.com/photo-1511201173873-c327e63eb6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9ueSUyMGZsb3dlcnMlMjBib3VxdWV0JTIwcGFzdGVsfGVufDF8fHx8MTc3OTU2MTMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 4,
    name: "Белоснежка",
    price: "55,00 Br",
    category: "Розы",
    image: "https://images.unsplash.com/photo-1578439231583-9eca0a363860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc5NTMwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 5,
    name: "Весенний сад",
    price: "72,00 Br",
    category: "Пионы",
    image: "https://images.unsplash.com/photo-1582794543462-0d7922e50cf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwaW5rJTIwcGVvbmllcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzc5NTAzNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 6,
    name: "Романтика",
    price: "44,90 Br",
    category: "Розы",
    image: "https://images.unsplash.com/photo-1548094967-e25a127d1f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZWQlMjByb3NlcyUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc5NTMwMDYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 7,
    name: "Фиалка комнатная",
    price: "25,00 Br",
    category: "Горшечные",
    image: "https://images.unsplash.com/photo-1631019650382-a0945075a592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW9sZXQlMjBmbG93ZXIlMjBwb3R0ZWQlMjBpbmRvb3IlMjBwbGFudHxlbnwxfHx8fDE3Nzk2MjUyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 8,
    name: "Орхидея",
    price: "85,00 Br",
    category: "Горшечные",
    image: "https://images.unsplash.com/photo-1593525432932-46a49ad5fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoaWQlMjBwb3R0ZWQlMjBwbGFudCUyMHdoaXRlJTIwcHVycGxlfGVufDF8fHx8MTc3OTYyNTIzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 9,
    name: "Суккулент",
    price: "18,00 Br",
    category: "Горшечные",
    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMHBvdHxlbnwxfHx8fDE3Nzk2MjUyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 10,
    name: "Нежный рассвет",
    price: "95,00 Br",
    category: "Пионы",
    image: "https://images.unsplash.com/photo-1539622230226-3d4eb483b3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwaW5rJTIwcGVvbmllcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzc5NTAzNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 11,
    name: "Роскошь в коробке",
    price: "120,00 Br",
    originalPrice: "150,00 Br",
    category: "Наборы",
    image: "https://images.unsplash.com/photo-1642991946115-9afea1d7d3d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwZ2lmdCUyMGJveCUyMGx1eHVyeSUyMHJvc2VzfGVufDF8fHx8MTc3OTYyNTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    discount: "-20%",
  },
  {
    id: 12,
    name: "Романтический набор",
    price: "105,00 Br",
    category: "Наборы",
    image: "https://images.unsplash.com/photo-1773394019220-18d77a674757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyb21hbnRpYyUyMGZsb3dlciUyMGFycmFuZ2VtZW50JTIwZ2lmdCUyMHNldHxlbnwxfHx8fDE3Nzk2MjU0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
  {
    id: 13,
    name: "Нежность в вазе",
    price: "89,50 Br",
    category: "Наборы",
    image: "https://images.unsplash.com/photo-1605116870516-adb617e9b287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwZmxvd2VycyUyMGluJTIwdmFzZSUyMGJvdXF1ZXR8ZW58MXx8fHwxNzc5NjI1NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    discount: null,
  },
];

export default function Catalog() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const categories = ["Все", "Розы", "Пионы", "Горшечные", "Наборы"];

  // Установка категории из URL параметров
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      // Маппинг названий категорий
      const categoryMap: { [key: string]: string } = {
        "Розы": "Розы",
        "Пионы": "Пионы",
        "Горшечные растения": "Горшечные",
        "Подарочные наборы": "Наборы",
      };
      const mappedCategory = categoryMap[categoryFromUrl];
      if (mappedCategory && categories.includes(mappedCategory)) {
        setSelectedCategory(mappedCategory);
      }
    }
  }, [searchParams]);

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Заголовок */}
        <h1 className="text-[32px] lg:text-[48px] font-bold mb-6 lg:mb-10" style={{ color: "#2D2D2D" }}>
          Каталог
        </h1>

        {/* Фильтры */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter size={20} style={{ color: "#FF6B8B" }} />
            <span className="font-semibold" style={{ color: "#2D2D2D" }}>
              Категория:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all min-h-[44px] ${
                  selectedCategory === category
                    ? "text-white"
                    : "border-2"
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: "#FF6B8B" }
                    : {
                        borderColor: "#FF6B8B",
                        color: "#FF6B8B",
                        backgroundColor: "white",
                      }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
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
                <div className="text-xs lg:text-sm font-semibold mb-2" style={{ color: "#88B04B" }}>
                  {product.category}
                </div>
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

        {/* Если нет товаров */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              В этой категории пока нет товаров
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
