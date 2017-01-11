
//AMD
// define(['./scripts/layout/layout.string'], function (layout) {
//
// });
//引进样式
import "./styles/usage/app.scss";
//引入layout
import layout from "./scripts/layout/layout.string"
//引进React 和 React-dom
import React from "react";
import ReactDOM from "react-dom";

common.renderBody(layout);
//引进公共JS
import common from "./scripts/utils/util.common.js";
//引入组件
import Index from "./scripts/components/index/index.js";
//代码部分



ReactDOM.render(
	<Index/>,
	document.getElementById("app")
)
