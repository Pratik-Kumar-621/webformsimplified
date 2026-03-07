interface NavItemType {
  name: string;
  to: string;
  user?: boolean;
}

export const navItems: NavItemType[] = [
  {
    name: "Features",
    to: "#features",
  },
  {
    name: "Components",
    to: "/components",
  },

  {
    name: "Themes",
    to: "/themes",
  },
  {
    name: "Playground",
    to: "/playground",
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
