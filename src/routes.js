import About from "./views/About"
import FirstAIConf from "./views/FirstAIConf"
import Activities from "./views/Activities"

const routes = [{
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
}
]

export default routes;