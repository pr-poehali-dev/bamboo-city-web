import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Кастомные плагины",
      description:
        "Уникальные плагины, созданные специально для нашего сервера. Новые механики и возможности!",
    },
    {
      icon: "Package",
      title: "Дата-Паки",
      description:
        "Современные дата-паки расширяют возможности игры и добавляют новый контент.",
    },
    {
      icon: "Trophy",
      title: "Крутые ивенты",
      description:
        "Регулярные ивенты с призами, соревнования и особые события для всех игроков.",
    },
    {
      icon: "Users",
      title: "Дружное сообщество",
      description:
        "Активное и дружелюбное сообщество игроков, готовых помочь новичкам.",
    },
    {
      icon: "Shield",
      title: "Стабильность",
      description:
        "Надёжные сервера с минимальными лагами и защитой от читеров.",
    },
    {
      icon: "Sparkles",
      title: "Постоянные обновления",
      description:
        "Регулярные обновления контента и новые возможности для игроков.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Особенности сервера
          </h2>
          <p className="text-gray-300 text-lg font-['Open_Sans'] max-w-2xl mx-auto">
            BambooCity предлагает уникальный игровой опыт с современными
            технологиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-600/20 rounded-lg">
                    <Icon
                      name={feature.icon as any}
                      className="text-green-400"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-white text-xl font-['Montserrat']">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 font-['Open_Sans'] leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Статистика сервера */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-gray-400">Активных игроков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Онлайн сервер</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
            <div className="text-gray-400">Уникальных плагинов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
            <div className="text-gray-400">Время работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
