//import React from "React";
var List=React.createClass({
  render:function(){
    return (
       <li>
         {this.props.list["src"]}
       </li>
    )
  }
})
export default List;
