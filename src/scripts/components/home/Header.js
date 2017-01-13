//引进React 和 React-dom
import React from "react";

var Header = React.createClass({
	render:function(){
		return (
			<header >
				<div>
					<i>贵州</i>
					<b className="yo-ico">&#xe637;</b>
				</div>
				<div>贵州生态旅游</div>
				<div>详情</div>
			</header>
		)
	}
});

export default Header
