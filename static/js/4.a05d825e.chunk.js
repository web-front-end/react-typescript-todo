(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i});var n=function(e,t){var a=JSON.parse(localStorage.getItem("todos")),n=[];0===a.length?(n=[Object.assign({id:1},e)],localStorage.setItem("todos",JSON.stringify(n))):(n=a.concat([Object.assign({id:a[a.length-1].id+1},e)]),localStorage.setItem("todos",JSON.stringify(n))),"function"===typeof t&&t(n)},o=function(e,t){var a=JSON.parse(localStorage.getItem("todos")).filter(function(t){return t.id!==e});localStorage.setItem("todos",JSON.stringify(a)),"function"===typeof t&&t(a)},i=function(e,t){null===localStorage.getItem("todos")&&localStorage.setItem("todos",JSON.stringify([]));var a=JSON.parse(localStorage.getItem("todos"));"function"===typeof t&&t(c(e,a))},c=function(e,t){var a=[];switch(e){case"active":a=t.filter(function(e){return!0!==e.isCompleted});break;case"completed":a=t.filter(function(e){return!0===e.isCompleted});break;default:a=t}return a}},49:function(e,t,a){"use strict";var n=a(0),o=a(72),i=a(79),c=(a(43),function(e){var t=e.todoAmount;return n.createElement("footer",{className:"todo-footer"},n.createElement(o.a,{className:"some-class",type:"blue",disabled:!1},"Todo items ".concat(t)),n.createElement("div",{className:"action"},n.createElement(i.a,{kind:"tertiary",className:"some-class",small:!0},"All"),n.createElement(i.a,{kind:"tertiary",className:"some-class",small:!0},"Completed")))}),r=a(50),s=a(9),l=a(10),d=a(12),u=a(11),m=a(13),f=a(73),p=a(74),b=a(75),h=a(77),g=(a(45),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",desc:"",isTitleValid:!1,isDescValid:!1},a.changeHandler=function(e){var t=e.target,n=t.name,o=t.value,i=Object(r.a)({},n,o);a.setState(i)},a.submitHandler=function(e){e.preventDefault();var t=a.props.addTodo,n=a.state,o=n.title,i=n.desc;""===o.trim()?a.setState({isTitleValid:!0}):""===i.trim()?a.setState({isDescValid:!0}):t(o,i)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.isAddLoading,t=this.state,a=t.isTitleValid,o=t.isDescValid;return n.createElement("form",{className:"todo-form",onSubmit:this.submitHandler},n.createElement(f.a,{className:"some-class",legendText:""},n.createElement(p.a,{id:"title",className:"some-class",value:this.state.title,labelText:"Todo Title",name:"title",type:"",placeholder:"Please input a todo title \ud83d\ude04",hideLabel:!1,invalidText:"title can't be empty",onChange:this.changeHandler,invalid:a})),n.createElement(f.a,{className:"some-class",legendText:""},n.createElement(b.a,{name:"desc",className:"some-class",hideLabel:!1,labelText:"Desc can't be empty",invalidText:"Desc",placeholder:"Todo Description",id:"desc",value:this.state.desc,onChange:this.changeHandler,invalid:o})),n.createElement(i.a,{kind:"primary",className:"some-class",iconDescription:"Add Todo",small:!0,type:"submit"},e?n.createElement(h.a,{description:""}):"Add Todo"))}}]),t}(n.PureComponent)),v=a(80),E=a(78),T=a(42),y=function(e){var t=e.todo,a=e.deleteTodo,o=t.id,i=t.title,c=t.desc;return n.useEffect(function(){return console.log("".concat(t.title," component is mounted")),function(){console.log("".concat(t.title," component is cleaned up"))}},[]),n.createElement(v.d,null,n.createElement(v.b,{noWrap:!0},i),n.createElement(v.b,null,c),n.createElement(v.b,null,n.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a(o)}},n.createElement(E.a,{className:"bx--structured-list-svg",icon:T.d,description:"select an option"}))))},N=a(52),S=a.n(N),O=(a(47),function(e){var t=e.todos,a=e.history,o=e.deleteTodo,i=e.sortTodos;return n.createElement(v.e,{selection:!0,border:!0},n.createElement(v.c,null,n.createElement(v.d,{head:!0},n.createElement(v.b,{head:!0},"Title \xa0",n.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),i()}},n.createElement(E.a,{className:"icon-CaretSort",icon:T.c,description:"add a todo"}))),n.createElement(v.b,{head:!0},"Description"),n.createElement(v.b,{head:!0},n.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a.push("/form")}},n.createElement(E.a,{className:"icon-add",icon:T.b,description:"add a todo"}))))),n.createElement(v.a,null,n.createElement(S.a,{transitionName:"todoitem",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:300,component:n.Fragment},t.length>0&&t.map(function(e){return n.createElement(y,{key:e.id,todo:e,deleteTodo:o})}))))});a.d(t,"a",function(){return c}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return O})},71:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(9),o=a(10),i=a(12),c=a(11),r=a(13),s=a(0),l=a(49),d=a(48),u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={isAddLoading:!1},a.addTodo=function(e,t){var n=a.props.history,o={title:e,desc:t,isCompleted:!1};a.setState({isAddLoading:!0}),setTimeout(function(){Object(d.a)(o,function(){a.setState({isAddLoading:!1}),n.push("/")})},1e3)},a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.isAddLoading,t={addTodo:this.addTodo,isAddLoading:e};return s.createElement("article",{className:"todo-container"},s.createElement(l.b,t))}}]),t}(s.PureComponent)}}]);
//# sourceMappingURL=4.a05d825e.chunk.js.map