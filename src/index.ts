import { Commands, Context, Route, Router } from "@vaadin/router";

import "./lit-app.ts";

const routes: Route[] = [
  {
    path: "/",
    component: "lit-app",
    children: [
      {
        path: "/",
        component: "lit-home",
        action: async () => {
          await import("./pages/home.ts");
        },
      },
      {
        path: "quote",
        component: "lit-quote",
        action: async () => {
          await import("./pages/quote.ts");
        },
      },
      {
        path: "users",
        component: "lit-users",
        action: async () => {
          await import("./pages/users.ts");
        },
      },
      {
        path: "photos",
        component: "lit-photos",
        action: async () => {
          await import("./pages/photos.ts");
        },
      },
    ],
  },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
