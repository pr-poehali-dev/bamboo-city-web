import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServerInfo = () => {
  const serverStats = [
    {
      label: "Онлайн игроков",
      value: "247",
      icon: "Users",
      color: "text-green-400",
    },
    {
      label: "Максимум игроков",
      value: "500",
      icon: "TrendingUp",
      color: "text-blue-400",
    },
    {
      label: "Время работы",
      value: "99.9%",
      icon: "Clock",
      color: "text-purple-400",
    },
    {
      label: "Версия сервера",
      value: "1.20.1",
      icon: "Package",
      color: "text-orange-400",
    },
  ];

  const features = [
    {
      icon: "Zap",
      title: "Без лагов",
      description: "Мощные сервера обеспечивают стабильную игру",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "Shield",
      title: "Защита от читов",
      description: "Современные античиты и активная модерация",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "Sparkles",
      title: "Уникальный контент",
      description: "Эксклюзивные плагины и кастомные механики",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "Trophy",
      title: "Ивенты и турниры",
      description: "Регулярные мероприятия с ценными призами",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const gameMode = [
    { name: "Survival", status: "online", players: 156 },
    { name: "Creative", status: "online", players: 43 },
    { name: "SkyBlock", status: "online", players: 28 },
    { name: "Prison", status: "maintenance", players: 0 },
    { name: "Minigames", status: "online", players: 20 },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Статистика сервера */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {serverStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-600 text-center"
            >
              <CardContent className="pt-6">
                <Icon
                  name={stat.icon as any}
                  className={`mx-auto mb-2 ${stat.color}`}
                  size={32}
                />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Игровые режимы */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8 font-['Montserrat']">
            🎮 Игровые режимы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {gameMode.map((mode, index) => (
              <Card
                key={index}
                className="bg-gray-800/70 border-gray-600 text-center"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Badge
                      className={`${
                        mode.status === "online"
                          ? "bg-green-500 text-black"
                          : "bg-orange-500 text-black"
                      }`}
                    >
                      {mode.status === "online" ? "🟢" : "🟠"}
                    </Badge>
                  </div>
                  <div className="text-white font-semibold mb-1">
                    {mode.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {mode.status === "online"
                      ? `${mode.players} игроков`
                      : "Техработы"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Особенности сервера */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-['Montserrat']">
            ⭐ Почему выбирают BambooCity?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-600 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3`}
                  >
                    <Icon
                      name={feature.icon as any}
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-white text-lg font-['Montserrat']">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 font-['Open_Sans']">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Контакты и сообщество */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl p-8 border border-purple-400/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 font-['Montserrat']">
              🌐 Присоединяйся к сообществу
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer">
                <Icon name="MessageCircle" />
                <span>Discord</span>
              </div>
              <div className="flex items-center gap-2 text-blue-500 hover:text-blue-400 cursor-pointer">
                <Icon name="Send" />
                <span>Telegram</span>
              </div>
              <div className="flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer">
                <Icon name="Youtube" />
                <span>YouTube</span>
              </div>
              <div className="flex items-center gap-2 text-pink-500 hover:text-pink-400 cursor-pointer">
                <Icon name="Instagram" />
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerInfo;
