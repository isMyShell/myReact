//引进React 和 React-dom
//import React from "react";

var Search = React.createClass({
	render:function(){
		return (
			<div className="Search">
				<div>
					<div>旅游</div>
					<input type="text" placeholder="请输入关键字" />
					<div>搜索</div>
				</div>
			</div>
		)
	}
});

export default Search
