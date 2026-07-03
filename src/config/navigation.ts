export interface NavLink {
  label: string;
  href: string;
}

export interface NavMenu {
  label: string;
  href?: string;
  items?: NavLink[];
}

export const navigationData: NavMenu[] = [
  {
    label: "About",
    href: "/about"
  },
  {
    label: "LGEC",
    items: [
      { label: "Singapore", href: "/event/singapore-2024" },
      { label: "London", href: "/event/london-2025" }
    ]
  },
  {
    label: "LOWS&A",
    items: [
      { label: "Dubai", href: "/event/dubai-2023" },
      { label: "Baku", href: "/event/baku-2024" },
      { label: "Hong Kong", href: "/event/hong-kong-macau-2025" },
      { label: "Egypt", href: "/event/cairo-2026" }
    ]
  },
  {
    label: "Gallery",
    href: "/gallery"
  },
  {
    label: "Our Partners",
    href: "/partners"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];
