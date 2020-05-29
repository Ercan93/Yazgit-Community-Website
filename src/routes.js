import About from "./views/About"
import FirstAIConf from "./views/FirstAIConf"

const routes = [{
    path: '/about',
    component: About,
    name: "aboutPage"
},
{
    path: '/FirstAIConf',
    component: FirstAIConf,
    name: 'firstAiConf'
}]

export default routes;