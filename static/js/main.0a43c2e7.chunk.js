(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={apiKey:"fd58b0c7b84ed95d8e8a84be2619e776"}},33:function(e,t,a){e.exports=a.p+"static/media/errorImg.dff0fa0a.jpg"},34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=(a(39),a(12)),s=a(13),i=a(15),u=a(14),h=a(16),m=(a(40),a(7)),p=a(6),f=a(10),d=a.n(f),g=a(11),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.submitSearch=function(e){e.preventDefault(),a.props.search(a.state.value);var t=a.state.value;a.props.history.push(t),e.currentTarget.reset()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"search-form",onSubmit:this.submitSearch},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",onChange:this.onChange,required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),b=Object(p.f)(E),v=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"../cats"},"Cats")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"../dogs"},"Dogs")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"../rabbit"},"Rabbit"))))},w=function(e){return r.a.createElement("li",{key:"".concat(e.id)},r.a.createElement("img",{src:"".concat(e.url),alt:""}))},k=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again."))},y=function(e){var t;if(e.photo.length>0){var a=e.photo;a&&(t=a.map(function(e){return r.a.createElement(w,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id})}))}else t=r.a.createElement(k,null);return r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,t))},j=a(33),S=a.n(j),O=function(){return r.a.createElement("img",{src:S.a,alt:"404 error"})},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:"",cat:"",dog:"",rabbit:"",loading:!0},a.performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sparrow",t="https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(g.apiKey,"&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1");a.setState({loading:!0}),d.a.get(t).then(function(e){console.log(e.data),a.setState({data:e.data.photos.photo.map(function(e){return e}),loading:!1})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.performSearch(),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(g.apiKey,"&tags=cats&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({cat:t.data.photos.photo.map(function(e){return e}),loading:!1})}).catch(function(e){console.log(e)}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(g.apiKey,"&tags=dogs&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({dog:t.data.photos.photo.map(function(e){return e}),loading:!1})}).catch(function(e){console.log(e)}),d.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(g.apiKey,"&tags=rabbit&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({rabbit:t.data.photos.photo.map(function(e){return e}),loading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{basename:"/react-app"},r.a.createElement(b,{search:this.performSearch}),r.a.createElement(v,null),this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,{photo:e.state.data})}}),r.a.createElement(p.a,{exact:!0,path:"/cats",render:function(){return r.a.createElement(y,{photo:e.state.cat})}}),r.a.createElement(p.a,{exact:!0,path:"/dogs",render:function(){return r.a.createElement(y,{photo:e.state.dog})}}),r.a.createElement(p.a,{exact:!0,path:"/rabbit",render:function(){return r.a.createElement(y,{photo:e.state.rabbit})}}),r.a.createElement(p.a,{exact:!0,path:"/:query",render:function(){return r.a.createElement(y,{photo:e.state.data})}}),r.a.createElement(p.a,{render:function(){return r.a.createElement(O,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.0a43c2e7.chunk.js.map