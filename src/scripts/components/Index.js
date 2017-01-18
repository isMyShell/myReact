
//import React from "react";

import {Link} from "react-router";


var Index = React.createClass({
	render:function(){
		return (
			<div id="container">
				<div id="box">
					{this.props.children}
				</div>
				<div>
					<div>
						<Link to="/">
							<b>111</b>
							<i>首页</i>
						</Link>
					</div>
					<div>
						<Link to="/Way">
							<b>111</b>
							<i>旅游路线</i>
						</Link>
					</div>
					<div>
						<Link to="/Seller">
							<b>111</b>
							<i>商家中心</i>
						</Link>
					</div>
					<div>
						<Link to="/My">
							<b>111</b>
							<i>会员中心</i>
						</Link>
					</div>
				</div>
			</div>
		)
	}
});

export default Index
