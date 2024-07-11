export interface IMenuItem {
  name: string;
  url: string;
  icon: string;
}

export const MENU_DATA: IMenuItem[] = [
  {
    name: "Home",
    url: "/",
    icon: "radix-icons:dashboard",
  },
  {
    name: "Products",
    url: "/products",
    icon: "radix-icons:backpack",
  },
  {
    name: "Payments",
    url: "/payments",
    icon: "radix-icons:globe",
  },
  {
    name: "Orders",
    url: "/orders",
    icon: "radix-icons:clipboard-copy",
  },
  {
    name: "Customers",
    url: "/customers",
    icon: "mingcute:group-line",
  },
  {
    name: "Feedback",
    url: "/feedback",
    icon: "fluent:person-feedback-16-regular",
  },
  {
    name: "Settings",
    url: "/settings",
    icon: "radix-icons:gear",
  },
  {
    name: "Help center",
    url: "/help",
    icon: "radix-icons:question-mark",
  },
];
