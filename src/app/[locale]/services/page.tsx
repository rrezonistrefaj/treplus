import ServicesBanner from "@/components/Banner/ServicesBanner";
import ServiceHighlights from "@/components/Services/ServiceHighlight";
import { serviceHighlightsData } from "@/components/Services/serviceHighlightsData";
import ServiceProcess from "@/components/Services/ServiceProcess";
import { serviceProcessData } from "@/components/Services/serviceProcessData";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20">
      <ServicesBanner />
      <ServiceHighlights items={serviceHighlightsData} />
      <ServiceProcess steps={serviceProcessData} />
    </div>
  );
}


