// Insights tabs data - only non-translatable configuration
// All text content (labels) is in locale files under "Insights.tabs"

export interface InsightTab {
  key: string; // Used to get translation key and match category
  categoryKey: string; // Category name for filtering (matches insightsData category)
  href: string; // Route path
}

export const insightsTabsData = {
  tabs: [
    { 
      key: 'all', 
      categoryKey: 'all',
      href: '/insights' 
    },
    { 
      key: 'marketing', 
      categoryKey: 'Marketing',
      href: '/insights/category/Marketing' 
    },
    { 
      key: 'software', 
      categoryKey: 'Development',
      href: '/insights/category/Development' 
    },
    { 
      key: 'creative', 
      categoryKey: 'Design',
      href: '/insights/category/Design' 
    },
    { 
      key: 'industry-news', 
      categoryKey: 'Industry News',
      href: '/insights/category/Industry%20News' 
    },
  ] as InsightTab[]
};

