interface NavItemType {
  name: string;
  to: string;
  user?: boolean;
}

export const navItems: NavItemType[] = [
  {
    name: "Components",
    to: "/components",
  },

  {
    name: "Features",
    to: "#features",
  },
  {
    name: "Themes",
    to: "/themes",
  },
  {
    name: "Playground",
    to: "/playground",
  },
  {
    name: "Pricing",
    to: "/pricing",
  },
];
export const navActionItems: NavItemType[] = [
  {
    name: "Get Started",
    to: "/signup",
    user: false,
  },
  {
    name: "Sign In",
    to: "/signin",
    user: false,
  },
  {
    name: "My Forms",
    to: "/dashboard",
    user: true,
  },
  {
    name: "Logout",
    to: "",
    user: true,
  },
];
