import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DonationPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: "vip",
      name: "VIP",
      price: 199,
      color: "from-green-500 to-emerald-600",
      icon: "Star",
      popular: false,
      features: [
        "Приоритетный вход на сервер",
        "Уникальный префикс [VIP]",
        "Доступ к VIP командам",
        "Расширенный инвентарь",
        "Защита от мобов в своём доме",
      ],
    },
    {
      id: "media",
      name: "Media",
      price: 399,
      color: "from-blue-500 to-cyan-600",
      icon: "Video",
      popular: false,
      features: [
        "Все возможности VIP",
        "Префикс [MEDIA]",
        "Доступ к записи видео",
        "Специальные эффекты",
        "Возможность стримить",
        "Уникальные эмоции",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 699,
      color: "from-purple-500 to-pink-600",
      icon: "Crown",
      popular: true,
      features: [
        "Все возможности Media",
        "Золотой префикс [PREMIUM]",
        "Приватные варпы",
        "Увеличенный лимит регионов",
        "Эксклюзивные скины",
        "Персональный помощник",
      ],
    },
    {
      id: "bambooguard",
      name: "BambooGuard",
      price: 1299,
      color: "from-orange-500 to-red-600",
      icon: "Shield",
      popular: false,
      features: [
        "Все возможности Premium",
        "Админский префикс [GUARD]",
        "Модераторские права",
        "Доступ к панели управления",
        "Неограниченные ресурсы",
        "Создание событий",
        "VIP поддержка 24/7",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 font-['Montserrat']">
            Донат Пакеты 👑
          </h2>
          <p className="text-gray-300 text-xl font-['Open_Sans'] max-w-3xl mx-auto">
            Получите уникальные возможности и поддержите развитие сервера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                selectedPackage === pkg.id
                  ? "border-white shadow-2xl transform scale-105"
                  : "border-gray-600 hover:border-gray-400"
              } bg-gray-800/70 backdrop-blur-sm`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-1">
                    🔥 ПОПУЛЯРНЫЙ
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center`}
                >
                  <Icon
                    name={pkg.icon as any}
                    className="text-white"
                    size={32}
                  />
                </div>
                <CardTitle className="text-2xl text-white font-['Montserrat']">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  <span className="text-4xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-lg"> ₽</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <Icon
                        name="CheckCircle"
                        className="text-green-400 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm font-['Open_Sans']">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 text-lg`}
                >
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl p-8 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Montserrat']">
              💳 Способы оплаты
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Smartphone" />
                <span>СБП</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="CreditCard" />
                <span>Банковские карты</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Wallet" />
                <span>Электронные кошельки</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Icon name="Smartphone" />
                <span>Мобильные платежи</span>
              </div>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              ⚡ Моментальная активация после оплаты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationPackages;
