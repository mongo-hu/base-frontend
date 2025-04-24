import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: $t("menus.pureLogin"),
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      title: $t("status.pureLoad"),
      showLink: false,
      rank: 102
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  },
  {
    path: "/smartMatch",
    component: Layout,
    meta: {
      icon: "mdi:brain",
      title: $t("menus.pureSmartMatch"),
      rank: 0
    },
    children: [
      {
        path: "",
        name: "SmartMatch",
        component: () => import("@/views/smartMatch/index.vue"),
        meta: {
          title: $t("menus.pureSmartMatch")
        }
      }
    ]
  },
  {
    path: "/moldDatabase",
    component: Layout,
    meta: {
      icon: "mdi:database-cog",
      title: $t("menus.pureMoldDatabase"),
      rank: 0
    },
    children: [
      {
        path: "",
        name: "MoldDatabase",
        component: () => import("@/views/moldDatabase/index.vue"),
        meta: {
          title: $t("menus.pureMoldDatabase")
        }
      }
    ]
  },
  {
    path: "/matchHistory",
    component: Layout,
    meta: {
      icon: "mdi:clock-time-four-outline",
      title: $t("menus.pureMatchHistory"),
      rank: 0
    },
    children: [
      {
        path: "",
        name: "MatchHistory",
        component: () => import("@/views/matchHistory/index.vue"),
        meta: {
          title: $t("menus.pureMatchHistory")
        }
      }
    ]
  },
  {
    path: "/cadManagement",
    component: Layout,
    meta: {
      icon: "ep:document",
      title: $t("menus.pureCADManagement"),
      rank: 0
    },
    children: [
      {
        path: "",
        name: "CADManagement",
        component: () => import("@/views/cadManagement/index.vue"),
        meta: {
          title: $t("menus.pureCADManagement")
        }
      }
    ]
  },
  {
    path: "/systemSettings",
    component: Layout,
    meta: {
      icon: "ep:setting",
      title: $t("menus.pureSystemSettings"),
      rank: 0
    },
    children: [
      {
        path: "",
        name: "SystemSettings",
        component: () => import("@/views/systemSettings/index.vue"),
        meta: {
          title: $t("menus.pureSystemSettings")
        }
      }
    ]
  }
] satisfies Array<RouteConfigsTable>;
