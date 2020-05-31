import About from "./views/About"
import SecondAIConf from "./views/SecondAIConf"
import FirstAIConf from "./views/FirstAIConf"
import Activities from "./views/Activities"

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
    }
]

export default routes;