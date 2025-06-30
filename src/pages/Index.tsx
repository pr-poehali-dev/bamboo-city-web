import HeroSection from "@/components/HeroSection";
import DonationPackages from "@/components/DonationPackages";
import ServerInfo from "@/components/ServerInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
      <HeroSection />
      <DonationPackages />
      <ServerInfo />
    </div>
  );
};

export default Index;
