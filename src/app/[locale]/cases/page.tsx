import CTASection from "@/components/CTA/CTASection";
import OurProjectsSection from "@/components/OurProjects/OurProjectsSection";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20">
        <OurProjectsSection />
        <CTASection />
    </div>
  );
}


