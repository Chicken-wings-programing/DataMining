import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'; // 确保正确导入 Vuex store

import StudentImagePage from '@/views/StudentImagePage.vue'
import KnowledgeRepoPage from '@/views/KnowledgeRepoPage.vue'
import MiningPage from '@/views/MiningPage.vue'

import MiningPageStep1 from '@/views/MiningPageStep1.vue'
import MiningPageStep2For12 from '@/views/MiningPageStep2For12.vue'
import MiningPageStep2For3 from '@/views/MiningPageStep2For3.vue'
import MiningPageStep2For4 from '@/views/MiningPageStep2For4.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/stuimage',
            name: 'StudentImagePage',
            component: StudentImagePage
        }, {
            path: '/mining',
            name: 'MiningPage',
            component: MiningPage,
            //在这里定义子路由（我的前端有两个嵌套的router-view，所以这里使用子路由）
            children: [
                {
                    path: '', // 默认子路由
                    component: MiningPageStep1,
                }, {
                    //在 Vue Router 中，如果子路由的路径不以斜杠 / 开始，它会被视为相对路径，会根据当前路由的路径来拼接。
                    //因此，如果你的子路由路径不加斜杠 /，那么它会相对于父路由的路径。
                    //例如，如果父路由的路径是 /mining，而子路由的路径是 step2for12，那么最终的子路由路径将会是 /mining/step2for12。这是 Vue Router 的默认行为。
                    path: 'step2for12',
                    component: MiningPageStep2For12
                }, {
                    path: 'step2for3',
                    component: MiningPageStep2For3
                }, {
                    path: 'step2for4',
                    component: MiningPageStep2For4
                }

            ]
        }, {
            path: '/krepo',
            name: 'KnowledgeRepoPage',
            component: KnowledgeRepoPage
        }
    ]
})
