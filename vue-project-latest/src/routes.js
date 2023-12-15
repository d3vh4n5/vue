// import QuestComponent from './components/QuestComponent.vue';
import HomeComponent from './components/HomeComponent.vue'
import ContadorComponent from './components/ContadorComponent.vue';

export const routes = [
    {path: '/contador', component: ContadorComponent},
    {path: '/', component: HomeComponent},
]