(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(16),c=n.n(s),i=(n(22),n(3)),o=n(4),d=n(6),l=n(5),h=n(17),u=n.n(h),j=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")},m=(n(41),n(0)),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){console.log(j())}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"w3-container w3-green",children:Object(m.jsx)("h1",{children:"Employee Directory"})})}}]),n}(a.a.Component);n(43);var b=function(e){var t=e.users;function n(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(m.jsx)("tbody",{children:void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,r=e.name,a=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{"data-th":"Image",className:"align-middle box",children:Object(m.jsx)("img",{src:a.large,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(m.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle box",children:[r.first," ",r.last]}),Object(m.jsx)("td",{"data-th":"Phone",className:"align-middle box",children:s}),Object(m.jsx)("td",{"data-th":"Email",className:"align-middle box",children:Object(m.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(m.jsx)("td",{"data-th":"DOB",className:"align-middle box",children:n(i.date)})]},t.uuid)})):Object(m.jsx)(m.Fragment,{})})};n(44);var O=function(e){var t=e.headings,n=e.users,r=e.handleSort;return Object(m.jsx)("div",{children:Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:t.map((function(e){var t=e.name,n=e.width;return Object(m.jsxs)("th",{className:"col",style:{width:n},onClick:function(){r(t.toLowerCase())},children:[t,Object(m.jsx)("span",{className:"pointer"})]},t)}))})}),Object(m.jsx)(b,{users:n})]})})};n(45);var v=function(e){var t=e.handleSearch;return Object(m.jsx)("nav",{children:Object(m.jsx)("div",{children:Object(m.jsx)("form",{children:Object(m.jsx)("input",{className:"form-control",onChange:function(e){return t(e)},name:"search",type:"search",placeholder:"Search for Employee",id:"search"})})})})},x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={users:[{}],order:"decsend",filteredUsers:[{}]},e.headings=[{name:"",width:"5%"},{name:"Name",width:"20%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"20%"}],e.handleSearch=function(t){console.log(t.target.value);var n=t.target.value,r=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(n.toLowerCase())}));e.setState({filteredUsers:r})},e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var n=e.state.filteredUsers.sort((function(n,r){return"ascend"===e.state.order?void 0===n[t]?1:void 0===r[t]?-1:"name"===t?n[t].first.localeCompare(r[t].first):n[t]-r[t]:void 0===n[t]?1:void 0===r[t]?-1:"name"===t?r[t].first.localeCompare(n[t].first):r[t]-n[t]}));e.setState({filteredUsers:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(v,{handleSearch:this.handleSearch}),Object(m.jsx)(O,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})]})}}]),n}(a.a.Component);var p=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(x,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.78631f12.chunk.js.map