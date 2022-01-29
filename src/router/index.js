import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import(/* webpackChunkName: "home" */ '../App.vue'),

            children:[
               
                
            ],
          },

          {
            path: '/firebasestore',
            name: 'FirebaseStore',
            component: () => import(/* webpackChunkName: "FirebaseStore" */ '../components/FirebaseStore.vue')
        },

          {
            path: '/students',
            name: 'StudentList',
            component: () => import(/* webpackChunkName: "FirebaseStore" */ '../components/Student/StudentList.vue')
         },
          {
            path: '/addstudent',
            name: 'AddStudent',
            component: () => import(/* webpackChunkName: "FirebaseStore" */ '../components/Student/AddStudent.vue')
         },
          {
            path: '/editstudent/:id',
            name: 'EditStudent',
            component: () => import(/* webpackChunkName: "FirebaseStore" */ '../components/Student/EditStudent.vue')
         },

    ]
});

export default routes;