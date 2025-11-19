import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { serviceDetailItems, getServiceBySlug } from "@/components/features/services/serviceDetailData";
import CTASection from "@/components/sections/CTA/CTASection";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetailItems.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) return notFound();

  const t = await getTranslations();
  const tServices = await getTranslations("Services");
  const title = t(item.i18nKey + ".title");
  const description = t(item.i18nKey + ".description");
  const related = serviceDetailItems.filter((s) => s.slug !== slug);

  return (
    <>
      <div className="max-w-[1100px] mx-auto px-4 xl:pl-0 pb-20">
        {/* Hero */}
        <div className="relative w-full rounded-[24px] overflow-hidden aspect-[1200/760] bg-gray-100 mt-8">
          <Image
            src={item.imageSrc}
            alt={title}
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="mt-10 font-unbounded font-bold text-[24px] md:text-[36px] lg:text-[48px] leading-tight">
          {title}
        </h1>

        {/* Body copy */}
        <div className="mt-6 text-[#474D57] space-y-8">
          <p>{description}</p>

          <section>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
              {tServices("detailPage.sections.ourApproach.heading")}
            </h2>
            <p>
              {tServices("detailPage.sections.ourApproach.content")}
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
              {tServices("detailPage.sections.whatWeOffer.heading")}
            </h2>
            <p>
              {tServices("detailPage.sections.whatWeOffer.content")}
            </p>
          </section>

          <section>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-[#0F0F0F] mb-2">
              {tServices("detailPage.sections.whyTrePlus.heading")}
            </h2>
            <p>
              {tServices("detailPage.sections.whyTrePlus.content")}
            </p>
          </section>
        </div>

        {/* Related service cards (two) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {related.map((srv) => {
              const rTitle = t(srv.i18nKey + ".title");
              const rDesc = t(srv.i18nKey + ".description");
              const rCta = t(srv.i18nKey + ".cta");
              const lightColor = `${srv.accentColor}1A`;
              return (
                <article key={srv.slug} className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-square rounded-[36px] overflow-hidden">
                    <Image
                      src={srv.imageSrc}
                      alt={rTitle}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[#22252A]">{rTitle}</h3>
                  <p className="mt-3 text-base text-[#474D57] leading-[20px] max-w-[520px]">
                    {rDesc}
                  </p>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="group flex items-center gap-3 mt-6 text-base font-semibold text-[#22252A] cursor-pointer transition-colors"
                    style={{ "--accent": srv.accentColor } as React.CSSProperties}
                  >
                    <span className="group-hover:[color:var(--accent)] transition-colors">
                      {rCta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                      style={{ backgroundColor: lightColor, color: srv.accentColor }}
                    >
                      ↗
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}


