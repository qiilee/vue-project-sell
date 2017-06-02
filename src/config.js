import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl'

module.exports = function(VueRouter){
	//1 配置路由 + 生成路由实例
	const router = new VueRouter({
		linkActiveClass: 'active',
		routes:[
			{
				name:'goods',
				path:'/goods',
				component: goods
			},
			{
				name:'ratings',
				path:'/ratings',
				component: ratings
			},
			{
				name:'seller',
				path:'/seller',
				component: seller
			},
			{   path:'*', 
			    redirect:'/goods'
			}
		]
	})

	return router;
}