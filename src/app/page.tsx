import OurWorkSection from "@/components/OurWork/OurWorkSection";
import ServicesSection from "@/components/Services/ServicesSection";
import StatsSection from "@/components/Stats/StatsSection";
import Banner from "@/components/Banner/Banner";
import CTASection from "@/components/CTA/CTASection";
import NumbersSection from "@/components/Numbers/NumbersSection";
import TeamSection from "@/components/Team/TeamSection";
  
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
