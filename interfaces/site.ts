export interface SiteLinkItem {
  label: string;
  href: string;
  icon?: string;
  iconAlt?: string;
  description?: string;
}

export interface SiteRoleLinkItem {
  role: string;
  href: string;
  name: string;
  icon?: string;
  iconAlt?: string;
}

export interface SiteSection<T> {
  label: string;
  items: T[];
}

export interface SiteHome {
  title: string;
  currently: SiteSection<SiteRoleLinkItem>;
  previously: SiteSection<SiteRoleLinkItem>;
  projects: SiteSection<SiteLinkItem>;
  blogs: { label: string };
  oss: SiteSection<SiteLinkItem>;
  resume: SiteSection<SiteLinkItem>;
}

export interface SiteUi {
  blogBack: string;
  blogContents: string;
}

export interface SiteContent {
  home: SiteHome;
  ui: SiteUi;
}
