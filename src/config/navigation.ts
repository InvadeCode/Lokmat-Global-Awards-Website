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
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "GloCon",
    href: "/glocon",
    items: [
      { label: "LGEC", href: "/lgec" },
      { label: "LOWS", href: "/lows" }
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
