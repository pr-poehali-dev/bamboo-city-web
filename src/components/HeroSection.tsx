import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-gray-900 to-emerald-800">
      {/* Панда выглядывает слева */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 z-10">
        <div className="text-8xl animate-bounce">🐼</div>
      </div>

      {/* Бамбук справа */}
      <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between opacity-30">
        <div className="text-6xl">🎋</div>
        <div className="text-6xl">🎋</div>
        <div className="text-6xl">🎋</div>
      </div>

      {/* Основной контент */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4 font-['Montserrat']">
            BambooCity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-['Open_Sans']">
            Современный Minecraft сервер с кастомными плагинами и уникальными
            ивентами
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Play" className="mr-2" />
            Присоединиться
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 text-lg"
          >
            <Icon name="Info" className="mr-2" />
            Подробнее
          </Button>
        </div>

        {/* IP сервера */}
        <div className="mt-12 p-4 bg-gray-800/50 rounded-lg border border-green-400/30">
          <p className="text-green-400 text-sm mb-2">IP Сервера:</p>
          <code className="text-white text-lg font-mono">
            play.bamboocity.ru
          </code>
        </div>
      </div>

      {/* Майнкрафт блоки декор */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-8 h-8 bg-green-600"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-emerald-500"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-green-700"></div>
        <div className="absolute bottom-20 right-20 w-7 h-7 bg-emerald-600"></div>
      </div>
    </section>
  );
};

export default HeroSection;
