(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{243:function(t,e,n){"use strict";n.r(e);var c=n(63),o={name:"Task",props:["task","index","length"],methods:{isChecked:function(t){Object(c.d)(t)},deleteTask:function(){this.$emit("remove-task",this.index-1),Object(c.b)(this.task.id)}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"space-y-2"},[c("div",{staticClass:"flex flex-row justify-between mr-4 items-center"},[c("div",{staticClass:"flex flex-row items-center space-x-4"},[c("input",{attrs:{type:"checkbox"},domProps:{checked:t.task.checked},on:{click:function(e){return t.isChecked(t.task.id)}}}),t._v(" "),c("div",{staticClass:"flex flex-col",class:t.task.checked?"line-through":null},[c("h1",[t._v(t._s(t.task.name))]),t._v(" "),c("p",{staticClass:"text-sm text-gray-500"},[t._v(" "+t._s(t.index)+" sur "+t._s(t.length)+" • Echeance: "+t._s(t.$moment(t.task.date).fromNow())+" • "+t._s(t.task.note))])])]),t._v(" "),c("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.deleteTask()}}},[c("img",{attrs:{src:n(244),alt:"trash"}})])]),t._v(" "),c("hr",{staticClass:"border-gray-400 mr-4"})])}),[],!1,null,"5b2131ea",null);e.default=component.exports},244:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTRWNHoiIGZpbGw9IiM0RjRGNEYiLz48L3N2Zz4="},245:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGZpbGw9IiMwMDAiLz48L3N2Zz4="},246:function(t,e,n){"use strict";n.r(e);n(175);var c=n(243),o=n(63),r={name:"TasksGroup",props:["tasks"],components:{Task:c.default},data:function(){return{addTask:""}},methods:{removeTask:function(t){this.tasks.splice(t,1)},createTask:function(){Object(o.a)(this.addTask)}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"space-y-2"},[t._l(t.tasks,(function(e,n){return c("div",{key:n},[c("Task",{attrs:{task:e,index:n+1,length:t.tasks.length},on:{"remove-task":t.removeTask}})],1)})),t._v(" "),c("div",{staticClass:"flex flex-row space-x-4 py-3 items-align"},[c("img",{attrs:{src:n(245),alt:""},on:{click:function(e){return t.createTask()}}}),t._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:t.addTask,expression:"addTask"}],staticClass:"text-gray-400 ",attrs:{placeholder:"Ajouter une tâche..."},domProps:{value:t.addTask},on:{input:function(e){e.target.composing||(t.addTask=e.target.value)}}})]),t._v(" "),c("hr",{staticClass:"border-gray-400 mr-4"})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Task:n(243).default})}}]);