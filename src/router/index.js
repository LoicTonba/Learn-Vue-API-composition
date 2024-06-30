import { createRouter, createWebHistory } from 'vue-router'
import DeclarativeRedering from '../views/DeclarativeRedering.vue'
import EventListeners from '@/views/EventListeners.vue'
import FormBinding from '@/views/FormBinding.vue'
import ConditionalRedering from '@/views/ConditionalRedering.vue'
import ListRendering from '@/views/ListRendering.vue'
import ComputedProperty from '@/views/ComputedProperty.vue'
import LifecycleHooks from '@/views/LifecycleHooks.vue'
import WaTchers from '@/views/WaTchers.vue'
import FirstComponents from '@/views/FirstComponents.vue'
import parentComp from '@/views/parentComp.vue'
import ChildComp from '@/views/ChildComp.vue'
import CongraTulations from '@/views/CongraTulations.vue'



const routes = [
  {
    path: '/',
    name: 'DeclarativeRedering',
    component: DeclarativeRedering
  },
  {
    path: '/attributebinding',
    name: 'attributebinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AttributeBinding.vue')
  },
  {
    path: '/eventlisteners',
    name: 'EventListeners',
    component: EventListeners
  },
  {
    path: '/formbinding',
    name: 'FormBinding',
    component: FormBinding
  },
  {
    path: '/conditionalredering',
    name: 'ConditionalRedering',
    component: ConditionalRedering
  },
  {
    path: '/listrendering',
    name: 'ListRendering',
    component: ListRendering
  },
  {
    path: '/computedproperty',
    name: 'ComputedProperty',
    component: ComputedProperty
  },
  {
    path: '/lifecyclehooks',
    name: 'LifecycleHooks',
    component: LifecycleHooks
  },
  {
    path: '/watchers',
    name: 'WaTchers',
    component: WaTchers
  },
  {
    path: '/components',
    name: 'FirstComponents',
    component: FirstComponents
  },
  {
    path: '/parentcomp',
    name: 'parentComp',
    component: parentComp
  },
  {
    path: '/childcomp',
    name: 'ChildComp',
    component: ChildComp
  },
  {
    path: '/congratulations',
    name: 'CongraTulations',
    component: CongraTulations
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
