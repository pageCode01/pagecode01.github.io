import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    // Your server will no longer report 404 errors as all not-found paths now serve up your index.html file.
    path: "/:pathMatch(.*)",
    name: "Error",
    component: () => import("../views/NotFoundComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //Scroll to an id
  scrollBehavior(to) {
    if (to.hash) {
      //Delaying the scrool
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: "smooth",
          });
        }, 650);
      });
    }
  },
});

export default router;
