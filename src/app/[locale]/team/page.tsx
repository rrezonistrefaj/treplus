import TeamBanner from "@/components/banners/TeamBanner";
import TeamMembersSection from "@/components/sections/TeamMembers/TeamMembersSection";
import StatsSection from "@/components/sections/Stats/StatsSection";
import WhoWeAreSection from "@/components/sections/WhoWeAre/WhoWeAreSection";
import WhatWeDoSection from "@/components/sections/WhatWeDo/WhatWeDoSection";
import NumbersSection from "@/components/sections/Numbers/NumbersSection";
import CTASection from "@/components/sections/CTA/CTASection";


export default function ServicesPage() {
  return (
    <div>
      <TeamBanner />
      <StatsSection hideHeading={true} />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <NumbersSection/>
      <TeamMembersSection />
      <CTASection/>
    </div>
  );
}


