(this["webpackJsonpyugioh-cards"]=this["webpackJsonpyugioh-cards"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),c=t.n(r),i=(t(13),t(4)),s=t(5),h=t(1),l=t(6),u=t(7),d=(t(14),t(15),t(16),function(e){}),f=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),m=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).state={monsters:[],searchfield:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://db.ygoprodeck.com/api/v6/cardinfo.php").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"handleChange",value:function(e){this.setState({searchfield:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Yugioh Duel Monsters"),o.a.createElement(f,{placeholder:"Search Yugioh Cards",handleChange:this.handleChange}),o.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.18cfccf6.chunk.js.map