import InsightsBanner from "@/components/banners/InsightsBanner";
import CTASection from "@/components/sections/CTA/CTASection";
import InsightsListing from "@/components/sections/Insights/InsightsListing";

export default function InsightsPage() {
  return (
    <>
      <main>
        <InsightsBanner />
        <InsightsListing />
      </main>
      <CTASection />
    </>
  );
}
