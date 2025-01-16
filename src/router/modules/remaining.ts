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
    path: "/comprehensive-warning",
    component: Layout,
    redirect: "/comprehensive-warning/index",
    meta: {
      title: $t("menus.pureComprehensiveWarning"),
      showLink: true,
      rank: 103
    },
    children: [
      {
        path: "/comprehensive-warning/index",
        name: "ComprehensiveWarning",
        component: () => import("@/views/comprehensive-warning/index.vue"),
        meta: {
          title: $t("menus.pureComprehensiveWarning"),
          showLink: true
        }
      }
    ]
  },
  {
    path: "/configuration-management",
    component: Layout,
    redirect: "/configuration-management/index",
    meta: {
      title: $t("menus.pureConfigurationManagement"),
      showLink: true,
      rank: 104
    },
    children: [
      {
        path: "/configuration-management/index",
        name: "ConfigurationManagement",
        component: () => import("@/views/configuration-management/index.vue"),
        meta: {
          title: $t("menus.pureConfigurationManagement"),
          showLink: true
        }
      }
    ]
  },
  {
    path: "/device-management",
    component: Layout,
    redirect: "/device-management/index",
    meta: {
      title: $t("menus.pureDeviceManagement"),
      showLink: true,
      rank: 105
    },
    children: [
      {
        path: "/device-management/index",
        name: "DeviceManagement",
        component: () => import("@/views/device-management/index.vue"),
        meta: {
          title: $t("menus.pureDeviceManagement"),
          showLink: true
        }
      }
    ]
  }
] satisfies Array<RouteConfigsTable>;
