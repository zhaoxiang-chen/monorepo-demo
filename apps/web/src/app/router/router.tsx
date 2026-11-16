import { createBrowserRouter } from "react-router"
import { MainLayout } from "@/app/layouts/MainLayout"
import { RequireAuth } from "@/app/router/RequireAuth"
import { HomePage } from "@/pages/home"
import { NotFoundPage } from "@/pages/not-fount"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        Component: RequireAuth,
        children: [
          {
            path: "settings",
            lazy: async () => {
              const { SettingsPage } = await import("@/pages/settings")
              return { Component: SettingsPage }
            },
          },
        ],
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
])
