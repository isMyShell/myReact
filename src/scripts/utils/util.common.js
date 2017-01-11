var common = {
	renderBody(str){
		var body = document.body;
		body.innerHTML = str + body.innerHTML;
	}
}
export default common;
