import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/about.vue";
import Manage from "../views/manage.vue";
import Song from "../views/Song.vue";
import useUserStore from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "manage",
      path: "/manage",
      component: Manage,
      beforeEnter: (to, from, next) => {
        console.log("Manage Route Guard");
        next();
      },
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/manage-music",
      redirect: { name: "manage" },
    },
    {
      name: "song",
      path: "/song/:id",
      component: Song,
    },
    {
      path: "/:catchAll(.*)*",
      redirect: { name: "home" },
    },
  ],
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  //console.log(to.meta);
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = useUserStore();
  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});
export default router;
