(window["webpackJsonpmemory-game"]=window["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"USA","image":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"},{"id":2,"name":"Germany","image":"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"},{"id":3,"name":"South Africa","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2000px-Flag_of_South_Africa.svg.png"},{"id":4,"name":"France","image":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"},{"id":5,"name":"Brazil","image":"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"},{"id":6,"name":"Russia","image":"https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg"},{"id":7,"name":"Morocco","image":"https://www.worldatlas.com/r/w728-h425-c728x425/upload/8c/99/76/shutterstock-742638283.jpg"},{"id":8,"name":"Mexico","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png"},{"id":9,"name":"India","image":"https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"},{"id":10,"name":"Australia","image":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3690057/600/400/m2/fpnw/wm0/australia-.jpg?1512483267&s=238e92afed3f01371b8c0d7e2917e3b7"},{"id":11,"name":"Japan","image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png"},{"id":12,"name":"Spain","image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png"}]')},,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(7),r=t.n(o),c=(t(15),t(9)),s=t(1),l=t(2),u=t(4),d=t(3),m=t(5);t(16);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},p=(t(17),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={index:0,count:0},t.words=e.children.split("-"),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"flash",value:function(){var e=this;this.setState(function(a){return{index:a.count%e.words.length,count:a.count+1}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.flash()},600)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return i.a.createElement("a",{href:"/"},i.a.createElement("h2",{className:"title"},this.words[this.state.index]))}}]),a}(i.a.Component));t(18);var h=function(e){return i.a.createElement("div",{className:"flags"},e.children)};t(19);var f=function(e){return i.a.createElement("div",{className:"img-container",onClick:function(){return e.handleClick(e.id)},onMouseEnter:function(){return e.handleMouseEnter(e.name)},onMouseLeave:e.handleMouseLeave},i.a.createElement("img",{alt:e.name,src:e.link}))},v=t(8),k=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={flags:v,clicked:[],topScore:0,current:""},t.shuffle=function(){var e=t.state.flags.sort(function(e,a){return.5-Math.random()});t.setState({flags:e})},t.handleClick=function(e){t.state.clicked.includes(e)?t.setState(function(e){return{clicked:[]}}):t.setState(function(a){return{clicked:[].concat(Object(c.a)(a.clicked),[e]),topScore:a.clicked.length+1>a.topScore?a.clicked.length+1:a.topScore}}),t.shuffle()},t.handleMouseEnter=function(e){t.setState({country:e})},t.handleMouseLeave=function(){t.setState({country:""})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(p,null,"test-your-memory.-don't-click-the same-flag-twice."),i.a.createElement("div",{id:"tab"},i.a.createElement("span",{class:"scores score"},"score: ",this.state.clicked.length),i.a.createElement("span",{class:"scores top-score"},"top score: ",this.state.topScore)),i.a.createElement(h,null,this.state.flags.map(function(a){return i.a.createElement(f,{id:a.id,name:a.name,link:a.image,handleClick:e.handleClick,handleMouseEnter:e.handleMouseEnter,handleMouseLeave:e.handleMouseLeave})})),i.a.createElement("div",{id:"caption"},this.state.country))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.91b35e8e.chunk.js.map