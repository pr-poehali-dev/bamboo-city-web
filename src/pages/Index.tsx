import HeroSection from "@/components/HeroSection";
import CurrencyPurchase from "@/components/CurrencyPurchase";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <HeroSection />
      <CurrencyPurchase />
      <FeaturesSection />
    </div>
  );
};

export default Index;
