import InsightsListing from "@/components/sections/Insights/InsightsListing";
import InsightsBanner from "@/components/banners/InsightsBanner";
import CTASection from "@/components/sections/CTA/CTASection";

type Params = {
  params: Promise<{ category: string }>;
};

export default async function InsightsCategoryPage({ params }: Params) {
  const { category } = await params;
  return (
    <>
      <InsightsBanner />
      <InsightsListing initialCategory={category} />
      <CTASection />
    </>
  );
}


