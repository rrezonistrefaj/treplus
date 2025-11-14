import OurWorkSection from "@/components/sections/OurWork/OurWorkSection";
import ServicesSection from "@/components/sections/Services/ServicesSection";
import StatsSection from "@/components/sections/Stats/StatsSection";
import Banner from "@/components/banners/Banner";
import CTASection from "@/components/sections/CTA/CTASection";
import NumbersSection from "@/components/sections/Numbers/NumbersSection";
import TeamSection from "@/components/sections/Team/TeamSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <OurWorkSection />
      <NumbersSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}


