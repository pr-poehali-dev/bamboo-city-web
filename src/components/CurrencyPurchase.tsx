import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const CurrencyPurchase = () => {
  const [bambooAmount, setBambooAmount] = useState([1000]);
  const pricePerBamboo = 0.1; // 10 копеек за 1 Bamboo
  const totalPrice = bambooAmount[0] * pricePerBamboo;

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat']">
            Купить Bamboo 🎋
          </h2>
          <p className="text-gray-300 text-lg font-['Open_Sans']">
            Игровая валюта для покупок в магазине сервера
          </p>
        </div>

        <Card className="bg-gray-800 border-green-400/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center gap-2">
              <Icon name="Coins" />
              Покупка Bamboo
            </CardTitle>
            <CardDescription className="text-gray-400">
              Выберите количество валюты для покупки
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Слайдер */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">
                  Количество Bamboo:
                </span>
                <span className="text-green-400 text-2xl font-bold">
                  {bambooAmount[0].toLocaleString()} 🎋
                </span>
              </div>

              <Slider
                value={bambooAmount}
                onValueChange={setBambooAmount}
                max={20000}
                min={100}
                step={100}
                className="w-full"
              />

              <div className="flex justify-between text-sm text-gray-400">
                <span>100</span>
                <span>20,000</span>
              </div>
            </div>

            {/* Быстрый выбор */}
            <div className="space-y-2">
              <span className="text-white font-medium">Быстрый выбор:</span>
              <div className="flex flex-wrap gap-2">
                {predefinedAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    size="sm"
                    onClick={() => setBambooAmount([amount])}
                    className="border-green-400/50 text-green-400 hover:bg-green-400 hover:text-gray-900"
                  >
                    {amount.toLocaleString()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Итоговая цена */}
            <div className="bg-gray-700 rounded-lg p-4 border border-green-400/30">
              <div className="flex justify-between items-center">
                <span className="text-white text-lg">Итого к оплате:</span>
                <span className="text-green-400 text-2xl font-bold">
                  {totalPrice.toFixed(2)} ₽
                </span>
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {bambooAmount[0].toLocaleString()} Bamboo × {pricePerBamboo} ₽
              </div>
            </div>

            {/* Кнопка покупки */}
            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
            >
              <Icon name="CreditCard" className="mr-2" />
              Купить Bamboo за {totalPrice.toFixed(2)} ₽
            </Button>

            {/* Способы оплаты */}
            <div className="flex justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Smartphone" size={16} />
                <span>СБП</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="CreditCard" size={16} />
                <span>Карта</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Wallet" size={16} />
                <span>Кошелёк</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CurrencyPurchase;
