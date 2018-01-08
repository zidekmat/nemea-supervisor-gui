import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Home from './pages/Home.vue'
import MainListing from './pages/MainListing.vue'
import ModuleGroups from './pages/ModuleGroups.vue'
import Modules from './pages/Modules.vue'
import ConfModuleGroup from './pages/ConfModuleGroup.vue'
import ConfModule from './pages/ConfModule.vue'
import ConfInstance from './pages/ConfInstance.vue'

function route (path, file, name, children) {
  return {
    //exact: true,
		path: path,
    name: name, // for named routes
    children: children,
    component: require(`./pages/${file}.vue`)
  }
}

Vue.use(Router)

const router = new Router({
  base: __dirname,
  //mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/', component: Main, children: [
      	{path: '/', component: Home},
      	{path: '/module-groups', component: MainListing},
      	{path: '/modules', component: MainListing},
      	{path: '/Instances', component: MainListing},
        {path: '/conf/:group', component: ConfModuleGroup}, //, children: [
        {path: '/conf/:group/:module', component: ConfModule},
        {path: '/conf/:group/:module/:instance', component: ConfInstance},
        //  {path: '/:module', component: ConfModule, children: [
        //    {path: '/:instance', component: ConfInstance}          
        //  ]},
        //]},
      ]
    }
    // path, file(*.vue), name, children

		/*
    route('/', 'Main', null, [
      route('/', 'Home', 'home'),
			// Routes to specifics inside the tree
      route('/module-groups/:group', 'ModuleGroup', 'group', [
				route('module/:module', 'Module', 'module'),
				// nest more
				//route('/module-groups/:group/module/:module', '', ''),
				//route('/module-groups/:group/module/:module/instance/:instance', '', ''),
			]),
      //route('/modules', 'Module', 'module'),
      route('/instances', 'Instance', 'instance'),

      //route('/module-groups/:group', 'ModuleGroup', 'group'),
      //route('/instances/:resource/create', 'CrudForm', 'create'),
      //route('/example', 'Example'),
      //route('/settings', 'Settings'),
      //route('/theme', 'Theme'),
      //route('/chat', 'Chat'),
      //route('/about', 'About')
    ])

    // Global redirect for 404
    // { path: '*', redirect: '/error', query: {code: 404, message: 'Page Not Found.'} }
		*/
  ]

})

router.beforeEach((to, from, next) => {
  //global.store.dispatch('checkPageTitle', to.path)
  next()
})

export default router
