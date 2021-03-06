import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auction from '@/components/Auction'
import CreateAuction from '@/components/CreateAuction'
import ViewAuction from '@/components/ViewAuction/Index'
import Community from '@/components/Community'
import Contact from '@/components/Contact'
import Register from '@/components/Register'
import Login from '@/components/Login'
import EditAccount from '@/components/EditAccount'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Auction',
      name: 'Auction',
      component: Auction
    },

    {
      path: '/Calculator',
      name: 'Calculator',
      component: Calculator
    },

    {
      path: '/Auction/Create',
      name: 'Auction-Create',
      component: CreateAuction
    },

    {
      path: '/auctions/:auctionId',
      name: 'auction',
      component: ViewAuction
    },

    {
      path: '/Community',
      name: 'Community',
      component: Community
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/EditAccount',
      name: 'EditAccount',
      component: EditAccount
    },
  ]
})
