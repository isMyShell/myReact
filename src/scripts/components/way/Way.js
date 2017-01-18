//import React from "react";
import Waylist from "./waylist";
var Way = React.createClass({
	render:function(){
		return (
			<div id="way">
				 <div id="way_head">
				    <a className="yo-ico">&#xe681;</a>
						<span>生态旅游</span>
						<a className="yo-ico  more" href="javascript:;">&#xe679;</a>
				 </div>
				 <Waylist />
			</div>
		)
	}
});
export default Way
