import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/about'
import Home from '@/pages/home'
import Services from '@/pages/services'
import Work from '@/pages/work'
import Career from '@/pages/career'
import Contact from '@/pages/contact'
import Blog from '@/pages/blog'
import Team from '@/pages/our-team'
import Engagement from '@/pages/engagement'
import Clients from '@/pages/clients'
import Success from '@/pages/success'
import Wordpress from '@/pages/wordpress'
import Ecommerce from '@/pages/ecommerce'
import Woocommerce from '@/pages/woocommerce'
import Api from '@/pages/api'
import phpFrameworks from '@/pages/phpFrameworks'
import webSupport from '@/pages/webSupport'
import privacy from '@/pages/privacy'
import terms from '@/pages/terms'
import singlePage from '@/pages/singlePage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/career',
            name: 'Career',
            component: Career
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/single-page',
            name: 'singlePage',
            component: singlePage
        },
        {
            path: '/our-team',
            name: 'Our Team',
            component: Team
        },
        {
            path: '/engagement-model',
            name: 'Engagement Model',
            component: Engagement
        },
        {
            path: '/our-clients',
            name: 'Our Clients',
            component: Clients
        },
        {
            path: '/success-stories',
            name: 'Success Stories',
            component: Success
        },
        {
            path: '/wordpress-development',
            name: 'Wordpress',
            component: Wordpress
        },
        {
            path: '/ecommerce-development',
            name: 'Ecommerce',
            component: Ecommerce
        },
        {
            path: '/woocommerce',
            name: 'Woocommerce',
            component: Woocommerce
        },
        {
            path: '/api-development',
            name: 'API Development',
            component: Api
        },
        {
            path: '/php-frameworks',
            name: 'PHP Frameworks',
            component: phpFrameworks
        },
        {
            path: '/web-support',
            name: 'Web Support',
            component: webSupport
        },
        {
            path: '/privacy-policy',
            name: 'Privacy Policy',
            component: privacy
        }
        ,{
            path: '/terms-of-use',
            name: 'Terms of Use',
            component: terms
        }
    ]
})