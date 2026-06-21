import { HelpCircle, Leaf, Package, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

export default function Help() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("faq");

  // Установка вкладки из URL параметров
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && ["faq", "care", "return", "privacy"].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);

  const faqItems = [
    {
      question: "Как оформить заказ?",
      answer: "Выберите букет в каталоге, нажмите кнопку 'В корзину', заполните форму заказа с адресом доставки и контактными данными, затем подтвердите заказ. Мы позвоним вам для уточнения деталей.",
    },
    {
      question: "Сколько времени занимает доставка?",
      answer: "Стандартная доставка по Минску занимает до 2 часов с момента подтверждения заказа. Также доступна экспресс-доставка за 60 минут (дополнительно 10 Br).",
    },
    {
      question: "Можно ли заказать букет на определенное время?",
      answer: "Да, при оформлении заказа вы можете указать желаемое время доставки. Мы постараемся доставить букет точно к указанному времени.",
    },
    {
      question: "Что делать, если цветы завяли раньше времени?",
      answer: "Мы гарантируем свежесть цветов не менее 7 дней при правильном уходе. Если цветы завяли раньше, свяжитесь с нами – мы заменим букет или вернем деньги.",
    },
    {
      question: "Можно ли изменить или отменить заказ?",
      answer: "Да, вы можете изменить или отменить заказ, позвонив нам по телефону +375 (29) 123-45-67. Отмена возможна не позднее чем за 2 часа до доставки.",
    },
  ];

  const careItems = [
    {
      title: "Подготовка букета",
      steps: [
        "Распакуйте букет сразу после получения",
        "Обрежьте стебли под углом 45° острым ножом",
        "Удалите нижние листья, которые будут в воде",
        "Поставьте цветы в чистую вазу с прохладной водой",
      ],
    },
    {
      title: "Ежедневный уход",
      steps: [
        "Меняйте воду каждый день",
        "Подрезайте стебли на 1-2 см каждые 2-3 дня",
        "Удаляйте увядшие листья и лепестки",
        "Держите букет вдали от прямых солнечных лучей и батарей",
      ],
    },
    {
      title: "Продление свежести",
      steps: [
        "Добавьте в воду специальную подкормку для цветов",
        "Опрыскивайте цветы водой из пульверизатора",
        "Храните букет в прохладном месте (+18-22°C)",
        "Не ставьте цветы рядом с фруктами",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Заголовок */}
        <h1 className="text-[32px] lg:text-[48px] font-bold mb-6 lg:mb-10" style={{ color: "#2D2D2D" }}>
          Помощь
        </h1>

        {/* Табы */}
        <div className="mb-8 lg:mb-12">
          <div className="flex flex-wrap gap-3 border-b-2" style={{ borderColor: "#F0F0F0" }}>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 font-semibold transition-all min-h-[44px] relative ${
                activeTab === "faq" ? "text-[#FF6B8B]" : "text-gray-500"
              }`}
            >
              <HelpCircle size={20} className="inline mr-2 mb-1" />
              Часто задаваемые вопросы
              {activeTab === "faq" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FF6B8B" }} />
              )}
            </button>
            <button
              onClick={() => setActiveTab("care")}
              className={`px-6 py-3 font-semibold transition-all min-h-[44px] relative ${
                activeTab === "care" ? "text-[#FF6B8B]" : "text-gray-500"
              }`}
            >
              <Leaf size={20} className="inline mr-2 mb-1" />
              Уход за цветами
              {activeTab === "care" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FF6B8B" }} />
              )}
            </button>
            <button
              onClick={() => setActiveTab("return")}
              className={`px-6 py-3 font-semibold transition-all min-h-[44px] relative ${
                activeTab === "return" ? "text-[#FF6B8B]" : "text-gray-500"
              }`}
            >
              <Package size={20} className="inline mr-2 mb-1" />
              Возврат и обмен
              {activeTab === "return" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FF6B8B" }} />
              )}
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 font-semibold transition-all min-h-[44px] relative ${
                activeTab === "privacy" ? "text-[#FF6B8B]" : "text-gray-500"
              }`}
            >
              <Shield size={20} className="inline mr-2 mb-1" />
              Политика конфиденциальности
              {activeTab === "privacy" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#FF6B8B" }} />
              )}
            </button>
          </div>
        </div>

        {/* Контент табов */}
        <div>
          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#F9F9F9" }}>
                  <h3 className="text-lg lg:text-xl font-bold mb-3" style={{ color: "#2D2D2D" }}>
                    {item.question}
                  </h3>
                  <p className="text-base lg:text-lg" style={{ color: "#666" }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Уход за цветами */}
          {activeTab === "care" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {careItems.map((item, index) => (
                <div key={index} className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#E8F5E9" }}>
                  <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                    {item.title}
                  </h3>
                  <ul className="space-y-3 text-base" style={{ color: "#666" }}>
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>• {step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Возврат и обмен */}
          {activeTab === "return" && (
            <div className="space-y-6">
              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#FFF0F3" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Условия возврата
                </h3>
                <p className="text-base lg:text-lg mb-4" style={{ color: "#666" }}>
                  Мы гарантируем качество всех наших букетов. Если вы не удовлетворены покупкой, вы можете вернуть или обменять букет в следующих случаях:
                </p>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>• Цветы были несвежими при доставке</li>
                  <li>• Букет не соответствует описанию или фотографии</li>
                  <li>• Цветы завяли раньше гарантийного срока (7 дней)</li>
                  <li>• Была допущена ошибка в заказе</li>
                </ul>
              </div>

              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#F9F9F9" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Как оформить возврат
                </h3>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>1. Свяжитесь с нами по телефону +375 (29) 123-45-67 или email info@flowers.by</li>
                  <li>2. Опишите проблему и приложите фото букета (если возможно)</li>
                  <li>3. Мы рассмотрим вашу заявку в течение 24 часов</li>
                  <li>4. При подтверждении проблемы мы заменим букет или вернем деньги</li>
                </ul>
              </div>

              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#E8F5E9" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Важно знать
                </h3>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>• Возврат возможен в течение 24 часов после доставки</li>
                  <li>• Деньги возвращаются тем же способом, которым была произведена оплата</li>
                  <li>• Срок возврата денежных средств – до 5 рабочих дней</li>
                </ul>
              </div>
            </div>
          )}

          {/* Политика конфиденциальности */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#F9F9F9" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Сбор и использование информации
                </h3>
                <p className="text-base lg:text-lg mb-4" style={{ color: "#666" }}>
                  Мы собираем следующую информацию при оформлении заказа:
                </p>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>• Имя и фамилия</li>
                  <li>• Номер телефона</li>
                  <li>• Email адрес</li>
                  <li>• Адрес доставки</li>
                </ul>
                <p className="text-base lg:text-lg mt-4" style={{ color: "#666" }}>
                  Эта информация используется исключительно для обработки и доставки вашего заказа.
                </p>
              </div>

              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#FFF0F3" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Защита данных
                </h3>
                <p className="text-base lg:text-lg mb-4" style={{ color: "#666" }}>
                  Мы обеспечиваем защиту ваших персональных данных:
                </p>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>• Используем защищенное соединение (SSL)</li>
                  <li>• Не передаем данные третьим лицам без вашего согласия</li>
                  <li>• Храним данные на защищенных серверах</li>
                  <li>• Доступ к данным имеют только уполномоченные сотрудники</li>
                </ul>
              </div>

              <div className="p-6 lg:p-8 rounded-2xl" style={{ backgroundColor: "#E8F5E9" }}>
                <h3 className="text-lg lg:text-xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                  Ваши права
                </h3>
                <p className="text-base lg:text-lg mb-4" style={{ color: "#666" }}>
                  Вы имеете право:
                </p>
                <ul className="space-y-3 text-base lg:text-lg" style={{ color: "#666" }}>
                  <li>• Запросить копию ваших персональных данных</li>
                  <li>• Исправить неточные данные</li>
                  <li>• Удалить свои данные из нашей системы</li>
                  <li>• Отозвать согласие на обработку персональных данных</li>
                </ul>
                <p className="text-base lg:text-lg mt-4" style={{ color: "#666" }}>
                  Для реализации этих прав свяжитесь с нами по email: <a href="mailto:info@flowers.by" className="hover:opacity-80" style={{ color: "#FF6B8B" }}>info@flowers.by</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
