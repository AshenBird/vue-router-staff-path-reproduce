import { createRouter, createWebHistory} from "vue-router"
export const router = createRouter({
  history:createWebHistory(),
  routes:[{
    path:"/",
    component: ()=>import("@/pages/Foo.vue"),
    children:[
      {
        path:"staff",
        component: ()=>import("@/pages/Bar.vue")
      },
      {
        path:"bar",
        component: ()=>import("@/pages/Bar.vue")
      }
    ]
  }],
})

