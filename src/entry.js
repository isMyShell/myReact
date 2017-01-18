
//AMD
// define(['./scripts/layout/layout.string'], function (layout) {
//
// });
//引进样式
import "./styles/usage/app.scss";
//引入layout
import layout from "./scripts/layout/layout.string"
//引进React 和 React-dom
//import React from "react";
//import ReactDOM from "react-dom";
import {Router, Route,hashHistory} from "react-router";

//引进公共JS
import common from "./scripts/utils/util.common.js";

//代码部分
common.renderBody(layout);

//路由
import routes from "./routes.js"
import Index from "./scripts/components/Index"

// ReactDOM.render(
// 	<Index/>,
// 	document.getElementById("app")
// )
ReactDOM.render(
	<Router routes={routes} history={hashHistory}></Router>,
	document.getElementById("app")
)
