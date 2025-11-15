import CasesListing from "@/components/sections/Cases/CasesListing";
import CTASection from "@/components/sections/CTA/CTASection";
import OurProjectsSection from "@/components/sections/OurProjects/OurProjectsSection";
import { allowedCategories, CaseCategory } from "@/components/sections/Cases/casesData";

type Params = {
  params: Promise<{ category: CaseCategory }>;
};

export function generateStaticParams() {
  return allowedCategories.map((category) => ({ category }));
}

export default async function CategoryCasesPage({ params }: Params) {
  const { category } = await params;
  const initialCategory = allowedCategories.includes(category)
    ? category
    : "marketing";

  return (
    <div>
      <OurProjectsSection />
      <CasesListing initialCategory={initialCategory} />
      <CTASection />
    </div>
  );
}


