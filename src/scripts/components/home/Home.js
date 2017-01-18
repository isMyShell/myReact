//引进React 和 React-dom
//import React from "react";
//引入插件
import Header from "./Header"
import Section from "./Section"


var Home = React.createClass({
	render:function(){
		return (
			<div id="home">
				<Header/>
				<Section/>
			</div>
		)
	}
});

export default Home
