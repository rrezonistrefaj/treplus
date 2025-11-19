import Image from "next/image";
import { notFound } from "next/navigation";
import { insightsData } from "@/components/sections/Insights/insightsData";
import CTASection from "@/components/sections/CTA/CTASection";
import InsightsGrid from "@/components/sections/Insights/InsightsGrid";
import { InsightCardItem } from "@/components/sections/Insights/InsightCard";
import { getTranslations } from "next-intl/server";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightsData.items.map((i) => ({ slug: i.slug }));
}

export default async function InsightDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = insightsData.items.find((i) => i.slug === slug);
  if (!item) return notFound();

  const t = await getTranslations("Insights.detailPage");
  const related = insightsData.items.filter((i) => i.slug !== slug).slice(0, 6);

  return (
    <>
      <div className="max-w-[1260px] mx-auto px-4 xl:pl-0 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-[24px] overflow-hidden aspect-[1200/760] bg-gray-100 mt-8">
            <Image src={item.imageUrl} alt={item.title} fill className="object-cover w-full h-full" priority />
          </div>
          <h1 className="mt-10 font-unbounded font-bold text-[24px] md:text-[36px] lg:text-[48px] leading-tight">
            {item.title}
          </h1>
          <div className="mt-6 text-[#474D57] space-y-8">
            <p>
              {t("intro")}
            </p>
            <section>
              <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">{t("sections.whatMakesItWork.heading")}</h2>
              <p>
                {t("sections.whatMakesItWork.content")}
              </p>
            </section>
            <section>
              <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">{t("sections.whyItMatters.heading")}</h2>
              <p>
                {t("sections.whyItMatters.content")}
              </p>
            </section>
          </div>
        </div>

        <div className="mt-14">
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          <InsightsGrid items={related.map(({ id: _, ...item }) => item as InsightCardItem)} />
        </div>
      </div>
      <CTASection />
    </>
  );
}


