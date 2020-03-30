
//路由
import Vue from 'vue'
import vueRouter from 'vue-router'
import admin from '../component/main/admin.vue'
import home from '../component/main/home.vue'
import find from '../component/main/find.vue'
import order from '../component/main/order.vue'
import my from '../component/main/my.vue'
import typedetail from '../component/mainpage/typeinfo.vue'
import active from '../component/mainpage/active.vue';
import prodetail from '../component/mainpage/productordetail.vue'
Vue.use(vueRouter);
const route = new vueRouter({
    routes: [
        {
            path: "/",
            component: admin,
            redirect:"/home",
            children: [
                {
                    path: "/home",
                    component: home
                },
                {
                    path: "/find",
                    component: find
                },
                {
                    path: "/order",
                    component: order
                },
                {
                    path: "/my",
                    component: my
                }
            ]
        },
        {
            path:"/typeinfo",
            component:typedetail
        },
        {
            path:"/activeinfo",
            component:active
        },
        {
            path:"/detail",
            component:prodetail
        },
        {
            path: "*",
            redirect: "/"
        }
    ],
    mode: "history"
});
export default route;