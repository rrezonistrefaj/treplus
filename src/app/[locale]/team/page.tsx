import TeamBanner from "@/components/Banner/TeamBanner";
import TeamMembersSection from "@/components/TeamMembers/TeamMembersSection";
import TeamStatsSection from "@/components/TeamStats/TeamStatsSection";
import WhoWeAreSection from "@/components/WhoWeAre/WhoWeAreSection";
import WhatWeDoSection from "@/components/WhatWeDo/WhatWeDoSection";
import NumbersSection from "@/components/Numbers/NumbersSection";
import CTASection from "@/components/CTA/CTASection";


export default function ServicesPage() {
  return (
    <div>
      <TeamBanner />
      <TeamStatsSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <NumbersSection/>
      <TeamMembersSection />
      <CTASection/>
    </div>
  );
}


