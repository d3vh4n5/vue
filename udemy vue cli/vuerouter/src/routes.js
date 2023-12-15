import ComponenteInicioVue from "./components/ComponenteInicio.vue";
import ComponenteBlogVue from "./components/ComponenteBlog.vue";
import PostComponent from "./components/PostComponent.vue"

export const routes = [
    {path: '/',component: ComponenteInicioVue},
    {path: '/blog',component: ComponenteBlogVue},
    {path: '/post/:id', component: PostComponent}
]