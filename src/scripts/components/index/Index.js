//引进React 和 React-dom
import React from "react";
import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"


var Index = React.createClass({
	render:function(){
		return (
			<div id="index">
				<Header/>
				<Section/>
				<Footer/>
			</div>
		)
	}
});

export default Index
