import ServicesBanner from "@/components/Banner/ServicesBanner";
import ServiceHighlights from "@/components/Services/ServiceHighlight";
import { serviceHighlightsData } from "@/components/Services/serviceHighlightsData";
import ServiceProcess from "@/components/Services/ServiceProcess";
import { serviceProcessData } from "@/components/Services/serviceProcessData";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import InsightsSection from "@/components/Insights/InsightsSection";
import CTASection from "@/components/CTA/CTASection";

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


