import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import CasesGrid from "@/components/sections/Cases/CasesGrid";
import { casesData, getCaseBySlug } from "@/components/sections/Cases/casesData";
import { getTranslations } from "next-intl/server";
import CTASection from "@/components/sections/CTA/CTASection";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }));
}

export default async function CaseDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return notFound();

  const t = await getTranslations("Cases");
  const title = t(`${item.i18nKey}.title`);
  const description = t(`${item.i18nKey}.description`);

  const related = casesData.filter((c) => c.slug !== item.slug).slice(0, 6);

  return (
    <>
      <div className="max-w-[1260px] mx-auto px-4 xl:pl-0 pt-25 pb-20">
        {/* Upper content with 1100px max-width */}
        <div className="max-w-[1100px] mx-auto relative">
          {/* Hero */}
          <div className="relative w-full rounded-[24px] overflow-hidden aspect-[1200/760] bg-gray-100">
            <Image
              src={item.coverImage}
              alt={title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Purple vector overlay - outside hero image */}
          <div className="hidden lg:block absolute -top-20 -right-11 w-[180px] h-[180px] xl:-right-30 xl:w-[316px] xl:h-[316px] pointer-events-none z-10">
            <Image
              src="/teamBannerPurple.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="mt-10 font-unbounded font-bold text-[24px] md:text-[36px] lg:text-[48px] leading-tight">
            {title} – A Bold Look for a Bold Brand
          </h1>

          {/* Body copy */}
          <div className="mt-6 text-[#474D57] space-y-8 max-w-[900px]">
            <p>
              {description}
            </p>
            <section>
              <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
                The Challenge
              </h2>
              <p>
                When the client approached us, their goal was clear: they didn&apos;t
                want to look like just another brand. They wanted energy, youth, and
                a playful edge that would stand out both on shelves and in digital
                campaigns.
              </p>
            </section>
            <section>
              <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
                Our Creative Direction
              </h2>
              <p>
                We started by rethinking their visual language, building around a
                bold wordmark and a vivid palette. The design is intentionally
                simple so the name takes center stage, while the colors carry the
                personality.
              </p>
            </section>
            <section>
              <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
                Extending the Brand Experience
              </h2>
              <p>
                Beyond packaging, we created lifestyle visuals and digital campaign
                assets. From social media to e‑commerce banners, the look and feel
                stays consistent: confident, loud, and memorable.
              </p>
            </section>
          </div>
        </div>

        {/* Related grid - full 1260px width */}
        <div className="mt-14">
          <CasesGrid items={related} />
        </div>

        {/* View more */}
        <div className="flex justify-center mt-8">
          <Link
            href="/cases"
            className="bg-white border border-[#FF5F1F] text-[#FF5F1F] hover:bg-orange-50 px-6 py-3 rounded-[10px] transition-colors"
          >
            {t("buttons.viewMore")}
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}


