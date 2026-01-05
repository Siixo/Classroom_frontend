import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/(public)/Home.vue";
import Welcome from "../views/(public)/Welcome.vue";
import Register from "../views/(public)/Register.vue";
import VeilleTechno from "../views/VeilleTechno.vue";
import Modules from "../views/(auth)/Modules.vue";
import Profile from "../views/(auth)/Profile.vue";
import Blog from "../views/(auth)/Blog.vue";

const routes = [
  { path: "/", name: "home", component: Home },

  { path: "/welcome", name: "welcome", component: Welcome },
  { path: "/register", name: "register", component: Register },
  { path: "/veille-techno", name: "veille-techno", component: VeilleTechno },
  { path: "/modules", name: "modules", component: Modules },
  { path: "/profile", name: "profile", component: Profile },
  { path: "/blog", name: "blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
