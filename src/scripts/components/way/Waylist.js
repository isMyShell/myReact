//import React from "react";
import List from "./List";
var Waylist=React.createClass({
    getDefaultProps:function(){
      return {
        "url":"/api/way"
      }
    },
   getInitialState:function(){
     return {
       "date":""
     }
   },
   componentWillMount:function(){
     var that=this;
        $.ajax({
          type:"get",
          url:this.props.url,
          success:function(res){
           that.setState({
             "date":res
           })
          }
        })
   },
    render:function(){
       let arr=[];
       var len=this.state.date.length;
       for(let i=0;i<len;i++){
         arr.push(<List key={i} list={this.state.date[i]} />);
       }
      return(
        <div id="way_con">
          <ul>
            {arr}
          </ul>
        </div>
      )
    }
  }
)
export default Waylist;
