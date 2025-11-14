import ServicesBanner from "@/components/banners/ServicesBanner";
import ServiceHighlights from "@/components/features/services/ServiceHighlight";
import { serviceHighlightsData } from "@/components/features/services/serviceHighlightsData";
import ServiceProcess from "@/components/features/services/ServiceProcess";
import { serviceProcessData } from "@/components/features/services/serviceProcessData";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";
import InsightsSection from "@/components/sections/Insights/InsightsSection";
import CTASection from "@/components/sections/CTA/CTASection";

export default function ServicesPage() {
  return (
    <div className="">
      <ServicesBanner />
      <ServiceHighlights items={serviceHighlightsData} />
      <ServiceProcess steps={serviceProcessData} />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </div>
  );
}


