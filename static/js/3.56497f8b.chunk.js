(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l});var a=n(11),o=n(12),d=n(14),i=n(13),r=n(15),s=n(0),c=n(22),u=n(21),l=function(t){function e(){var t,n;Object(a.a)(this,e);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(n=Object(d.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(r)))).state={isAddLoading:!1},n.addTodo=function(t,e){var a=n.props.history,o={title:t,desc:e,isCompleted:!1};n.setState({isAddLoading:!0}),setTimeout(function(){Object(u.a)(o,function(){n.setState({isAddLoading:!1}),a.push("/")})},1e3)},n}return Object(r.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.state.isAddLoading,e={addTodo:this.addTodo,isAddLoading:t};return s.createElement("article",{className:"todo-container"},s.createElement(c.b,e))}}]),e}(s.PureComponent)}}]);
//# sourceMappingURL=3.56497f8b.chunk.js.map