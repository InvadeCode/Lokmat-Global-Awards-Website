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
    items: [
      { label: "Global Economic Convention", href: "/lgec" },
      { label: "One World Summit", href: "/lows" }
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
