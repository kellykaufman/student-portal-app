import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ResumesEdit from "../views/ResumesEdit.vue";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ResumeShow from "../views/ResumeShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/resumeshow",
    name: "ResumeShow",
    component: ResumeShow,
  },
  {
    path: "/resumes/:id/edit",
    name: "ResumesEdit",
    component: ResumesEdit,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
