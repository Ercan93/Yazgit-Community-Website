import About from "./views/About"
import SecondAIConf from "./views/SecondAIConf"
import FirstAIConf from "./views/FirstAIConf"
import Activities from "./views/Activities"
import Error404 from "./views/404"

const routes = [
    {
        path: '/',
        component: SecondAIConf,
        name: "secondAIConf"
    },
    {
        path: '/about',
        component: About,
        name: "aboutPage"
    },
    {
        path: '/FirstAIConf',
        component: FirstAIConf,
        name: 'firstAiConf'
    },
    {
        path: '/Activities',
        component: Activities,
        name: 'activities'
    },
    {
        path: '*',
        component: Error404,
        name: 'PageNotFound'
    }
]

export default routes;