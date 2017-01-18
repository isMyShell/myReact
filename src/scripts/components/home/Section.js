//引进React 和 React-dom
//import React from "react";

import Search from "./Search.js";

var Section = React.createClass({
	render:function(){
		return (
			<section>
				<Search/>
			</section>
		)
	}
});

export default Section
