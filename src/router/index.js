import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import('../views/Home/Home')
const StationPage = () => import('../views/Station/StationPage')
const SiderBarPage = ()=> import('../views/SiderBar/SiderBarPage')
const MapPage = () => import('../views/Map/MapPage')
const AgePage = () => import('../views/Age/AgePage')
const SingleStation = () => import('../views/SingleStation/SingleStation')
const Analysis = () =>import('../views/Analysis/Analysis')
const HeatMap = () =>import('../views/HeatMap/HeatMap')
const MonthPage = () =>import('../views/Monthly/MonthPage')
const MonthlyDayPage = () =>import('../views/MonthlyDay/MonthlyDayPage')
const SingleSectionPage = () =>import('../views/SingleSection/SingleSectionPage')
const SingleODPage = () =>import('../views/SingleOD/SingleODPage')
const PeakPage = () =>import('../views/Peak/PeakPage')
const WorkandWeekPage = () =>import('../views/WorkandWeek/WorkandWeekPage')
const HotMapPage = () =>import('../views/HeatMap/HotMapPage')
const StationStatus = () => import('../views/Station/stationstatus')

const Forecast = () => import('../views/Forecast/Forecast')
const linePredictPage = () => import('../views/linePredict/linePredictPage')
const stationPredictPage = () => import('../views/stationPredict/stationPredictPage')
const monthPredictPage = () => import('../views/monthPredict/monthPredictPage')
const allViewPage = () => import('../views/Allview/allViewPage')
const BeginPage = () => import('../views/BeginPage/BeginPage')
Vue.use(VueRouter)
//路由内部错误解决办法，解决路由同一路径多次发送请求报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/BeginPage'
  },
  {
    path: '/BeginPage',
    name: 'BeginPage',
    component: BeginPage
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'MapPage',
        component:MapPage
      },
      {
        name:'SingleStation',
        path:'SingleStation',
        component:SingleStation,
        children:[
          {
            path:'StationStatus',
            component:StationStatus,
          }
        ]
      }
    ]
  },
  {
    path: '/StationPage',
    name: 'StationPage',
    component: StationPage
  },
  {
    path: '/SiderBarPage',
    name: 'SiderBarPage',
    component: SiderBarPage
  },
  {
    path: '/MapPage',
    name: 'MapPage',
    component: MapPage
  },
  {
    path: '/AgePage',
    name: 'AgePage',
    component: AgePage
  },
  {
    path: '/MonthPage',
    name: 'MonthPage',
    component: MonthPage
  },
  {
    path: '/MonthlyDayPage',
    name: 'MonthlyDayPage',
    component: MonthlyDayPage
  },
  {
    path: '/Analysis',
    name: 'Analysis',
    component: Analysis,
  },
  {
    path: '/Forecast',
    name: 'Forecast',
    component: Forecast,
  },
  {
    path: '/allViewPage',
    name: 'allViewPage',
    component:allViewPage
  },
  {
    path: '/linePredictPage',
    name: 'linePredictPage',
    component: linePredictPage
  },
  {
    path: '/stationPredictPage',
    name: 'stationPredictPage',
    component:stationPredictPage
  },
  {
    path: '/monthPredictPage',
    name: 'monthPredictPage',
    component:monthPredictPage
  },
  {
    path: '/SingleSectionPage',
    name: 'SingleSectionPage',
    component: SingleSectionPage
  },
  {
    path: '/SingleODPage',
    name: 'SingleODPage',
    component: SingleODPage
  },
  {
    path: '/PeakPage',
    name: 'PeakPage',
    component: PeakPage
  },
  {
    path: '/WorkandWeekPage',
    name: 'WorkandWeekPage',
    component: WorkandWeekPage
  },
  {
    path: '/HeatMap',
    name: 'HeatMap',
    component: HeatMap,
    
  },
  {
    path: '/HotMapPage',
    name: 'HotMapPage',
    component: HotMapPage
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
