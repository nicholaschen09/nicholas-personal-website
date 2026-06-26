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

// Every section is optional: the home page and markdown route render only the
// sections present in _content/site.md, so adding or removing a section there
// just adds or removes it from the page (no code change, no crash).
export interface SiteHome {
  title: string;
  currently?: SiteSection<SiteRoleLinkItem>;
  previously?: SiteSection<SiteRoleLinkItem>;
  projects?: SiteSection<SiteLinkItem>;
  blogs?: { label: string };
  oss?: SiteSection<SiteLinkItem>;
  resume?: SiteSection<SiteLinkItem>;
}

export interface SiteUi {
  blogBack: string;
  blogContents: string;
}

export interface SiteContent {
  home: SiteHome;
  ui: SiteUi;
}
