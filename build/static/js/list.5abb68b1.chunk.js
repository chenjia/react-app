(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{428:function(e,t,a){"use strict";a.r(t);a(398);var n=a(255),r=a.n(n),o=(a(401),a(256)),i=a.n(o),s=(a(403),a(257)),c=a.n(s),l=(a(409),a(259)),u=a.n(l),h=(a(100),a(66)),d=a.n(h),m=a(21),f=a(22),p=a(25),g=a(23),v=a(26),w=(a(212),a(220)),E=a.n(w),k=a(0),b=a.n(k),y=E.a.Item,C=y.Brief,S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={modal:!1,down:!0,refreshing:!1,height:a.props.screenHeight-44,data:[]},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"add",value:function(e){for(var t=[],a=t.length,n=a;n<a+e;n++){var r={name:"\u6807\u9898"+n,random:Math.random()};t.push(r)}this.setState({data:t})}},{key:"remove",value:function(e){this.state.data.splice(e,1),this.setState({data:this.state.data})}},{key:"toggleSearch",value:function(e){this.setState({modal:e})}},{key:"componentDidMount",value:function(){this.add(10)}},{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement(d.a,{mode:"dark",leftContent:b.a.createElement("i",{onClick:function(){return e.props.history.push("./home")},className:"fa fa-fw fa-chevron-left"}),rightContent:b.a.createElement("i",{onClick:function(){return e.toggleSearch(!0)},className:"fa fa-fw fa-search"})},"\u5217\u8868"),b.a.createElement(c.a,{popup:!0,visible:this.state.modal,onClose:function(){return e.toggleSearch(!1)},animationType:"slide-down"},b.a.createElement(E.a,{renderHeader:function(){return b.a.createElement("div",null,"\u641c\u7d22\u6761\u4ef6")},className:"popup-list"},b.a.createElement(u.a,{placeholder:"Search",maxLength:8}))),b.a.createElement(r.a,{damping:60,ref:function(t){return e.ptr=t},style:{height:this.state.height,overflow:"auto"},indicator:this.state.down?{}:{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"},direction:this.state.down?"down":"up",refreshing:this.state.refreshing,onRefresh:function(){e.setState({refreshing:!0}),setTimeout(function(){e.add(10),e.setState({refreshing:!1})},1e3)}},b.a.createElement(E.a,{className:"list"},this.state.data.map(function(t,a){return b.a.createElement(i.a,{key:a,style:{backgroundColor:"gray"},autoClose:!0,right:[{text:b.a.createElement("span",null,b.a.createElement("i",{className:"fa fa-fw fa-remove"})," \u5220\u9664"),onPress:function(){return e.remove(a)},style:{backgroundColor:"#F4333C",color:"white"}}]},b.a.createElement(y,{align:"top",thumb:"static/img/head_bg.jpg"},t.name," ",b.a.createElement(C,null,t.random)))}))))}}]),t}(b.a.Component);t.default=S}}]);
//# sourceMappingURL=list.5abb68b1.chunk.js.map