import  "react-router";

import Index from "./scripts/components/Index"
import Home from "./scripts/components/home/Home"
import Way from "./scripts/components/way/Way"
import Seller from "./scripts/components/seller/Seller"
import My from "./scripts/components/my/My"

const routes = [
	{
		path:"/",
		component:Index,
		indexRoute:{component:Home},
		childRoutes:[
			{
				path:"/",
				component:Home
			},
			{
				path:"/Way",
				component:Way
			},
			{
				path:"/Seller",
				component:Seller
			},
			{
				path:"/My",
				component:My
			}
		]
	}
]

export default routes
