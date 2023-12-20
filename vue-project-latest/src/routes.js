// import QuestComponent from './components/QuestComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
import ContadorComponent from './components/ContadorComponent.vue';
import QuestsWrapper from './components/QuestsWrapper.vue'
import UsersWrapper from './components/UsersWrapper.vue';
import JsonCreator from './components/JsonCreator.vue';

export const routes = [
    {path: '/contador', component: ContadorComponent, meta: { transition: 'slide-left' }},
    {path: '/', component: HomeComponent, meta: { transition: 'slide-left' }},
    {path: '/QuestsWrapper/:mat', component: QuestsWrapper, meta: { transition: 'slide-left' }},
    {path: '/UsersWrapper', component: UsersWrapper, meta: { transition: 'slide-left' }},
    { path: '/jsoncreator', component: JsonCreator},
]