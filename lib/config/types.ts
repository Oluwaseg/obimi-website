export interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
