import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Майнкрафт персонажи */}
      <div className="absolute left-8 top-1/4 transform -translate-y-1/2 z-10">
        <div className="text-6xl animate-pulse">🧙‍♂️</div>
      </div>

      <div className="absolute right-8 bottom-1/4 z-10">
        <div className="text-6xl animate-bounce delay-300">⚔️</div>
      </div>

      <div className="absolute left-1/4 top-12 z-10">
        <div className="text-4xl animate-spin-slow">💎</div>
      </div>

      {/* Основной контент */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4 font-['Montserrat'] animate-pulse">
            BambooCity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-['Open_Sans']">
            Премиум Minecraft сервер с уникальными донат-возможностями
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg shadow-lg"
          >
            <Icon name="Play" className="mr-2" />
            Играть сейчас
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-3 text-lg"
          >
            <Icon name="Crown" className="mr-2" />
            Купить донат
          </Button>
        </div>

        {/* IP сервера */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-xl border border-purple-400/30 backdrop-blur-sm">
          <p className="text-purple-400 text-sm mb-2 font-semibold">
            IP Сервера:
          </p>
          <code className="text-white text-xl font-mono bg-black/30 px-4 py-2 rounded-lg">
            play.bamboocity.ru
          </code>
        </div>
      </div>

      {/* Майнкрафт блоки декор */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-8 h-8 bg-purple-600 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-500 animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-indigo-700 animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-7 h-7 bg-purple-500 animate-pulse delay-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;
