(function(e){function t(t){for(var n,a,s=t[0],o=t[1],c=t[2],h=0,p=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&p.push(l[a][0]),l[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,s=1;s<i.length;s++){var o=i[s];0!==l[o]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},l={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),l=i.n(n);l.a},"0ab0":function(e,t,i){"use strict";var n=i("c432"),l=i.n(n);l.a},3432:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Finder")],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"finder-container"},[i("div",{staticClass:"header-container"},[i("div",{staticClass:"w-50 mb-10 text-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"mb-10 search-input",attrs:{type:"text",placeholder:"Search Furniture"},domProps:{value:e.inputValue},on:{keyup:e.filterChange,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),i("div",{staticClass:"d-flex"},[i("div",{staticClass:"w-50 mr-37"},[i("multiselect",{attrs:{multiple:!0,placeholder:"Furniture Style",options:e.optionsStyleSelect},on:{input:e.filterChange},model:{value:e.valueStyleSelect,callback:function(t){e.valueStyleSelect=t},expression:"valueStyleSelect"}})],1),i("div",{staticClass:"w-50"},[i("multiselect",{attrs:{multiple:!0,placeholder:"Delivery Time",options:e.optionsDeliveryTimeSelect},on:{input:e.filterChange},model:{value:e.valueDeliveryTimeSelect,callback:function(t){e.valueDeliveryTimeSelect=t},expression:"valueDeliveryTimeSelect"}})],1)])]),i("div",{staticClass:"body-container"},[i("Card",{attrs:{datas:e.searchCollection}})],1)])},s=[],o=(i("4de4"),i("4160"),i("caad"),i("b0c0"),i("ac1f"),i("2532"),i("1276"),i("159b"),i("96cf"),i("1da1")),c=i("8e5f"),u=i.n(c),h=i("bc3a"),p=i.n(h),v=(i("e607"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"overflow-hidden"},e._l(e.datas,(function(t){return i("div",{key:t.name,staticClass:"float-left card-container"},[i("div",{staticClass:"d-flex mb-10"},[i("div",{staticClass:"w-50 text-left font-weight-bold"},[e._v(e._s(t.name))]),i("div",{staticClass:"w-50 text-right price font-weight-bold"},[e._v("IDR "+e._s(e.addDot(t.price))+",-")])]),i("div",{staticClass:"text-left mb-10"},[e._v(e._s(e.shortDescription(t.description)))]),i("div",{staticClass:"text-left mb-10 text-blue"},[e._v(e._s(e.convertCategory(t.furniture_style)))]),i("div",{staticClass:"text-right text-blue text-underline font-weight-bold"},[e._v("Delivery days: "+e._s(t.delivery_time)+" Day(s)")])])})),0)}),d=[],f=(i("a15b"),i("d3b7"),i("25f0"),i("5319"),{name:"Card",props:{datas:Array},methods:{convertCategory:function(e){return e.join(", ")},addDot:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},shortDescription:function(e){return e.length>114?"".concat(e.substring(0,114),"..."):e}}}),y=f,m=(i("0ab0"),i("2877")),S=Object(m["a"])(y,v,d,!1,null,null,null),g=S.exports,b={components:{Multiselect:u.a,Card:g},name:"Finder",props:{msg:String},data:function(){return{inputValue:"",valueStyleSelect:[],valueDeliveryTimeSelect:[],optionsStyleSelect:["ddd"],optionsDeliveryTimeSelect:["1 Week","2 Weeks","1 Month","More 1 Month"],convertedOptionsDeliveryTimeSelect:[],products:[],searchCollection:[],haveRunFilter:!1}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p()("http://www.mocky.io/v2/5c9105cb330000112b649af8");case 2:i=t.sent,e.optionsStyleSelect=i.data.furniture_styles,e.products=i.data.products,e.searchCollection=i.data.products,e.products.push({name:"Sofa More Than 1 Month",description:"Selama Anda dapat berkumpul bersama keluarga dan orang-orang terdekat, duduk di manapun mungkin rasanya tidak menjadi masalah untuk Anda. Akan tetapi, dengan berkumpul bersama menggunakan Jobi L Sofa, suasana quality time Anda akan terasa 180 derajat perubahannya.",furniture_style:["Classic","Midcentury"],delivery_time:"40",price:5e6});case 7:case"end":return t.stop()}}),t)})))()},filterChange:function(){this.runFiltering()},onChangeStyleSelect:function(e){this.valueStyleSelect=e,this.runFiltering()},onChangeDeliveryTimeSelect:function(e){this.valueDeliveryTimeSelect=e,this.runFiltering()},filterDeliveryTimeSelect:function(){console.log("RUN FILTER DELIVERY TIME");var e=this;this.convertedOptionsDeliveryTimeSelect=[];var t=[];this.valueDeliveryTimeSelect.forEach((function(t){e.convertedOptionsDeliveryTimeSelect.push(e.convertToDays(t))}));var i=Math.max.apply(Math,this.convertedOptionsDeliveryTimeSelect);if(i<=30){var n=this.searchCollection.length?this.searchCollection:this.products;n.forEach((function(e){parseInt(e.delivery_time)<=i&&t.push(e)}))}else t=this.searchCollection;this.searchCollection=t},filterSearch:function(){console.log("RUN FILTER SEARCH");var e=this.inputValue,t=this.products,i=this.searchCollection.length&&""!==e?this.searchCollection:t;this.searchCollection=i.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},filterStyle:function(){var e=this;console.log("RUN FILTER STYLE");var t=this.products,i=[],n=this.searchCollection.length?this.searchCollection:t;this.haveRunFilter&&this.searchCollection.length&&this.valueStyleSelect.forEach((function(t){e.searchCollection=n.filter((function(e){e.furniture_style.forEach((function(n){t===n&&i.push(e)}))}))})),this.searchCollection=i},runFiltering:function(){this.haveRunFilter=!0,this.inputValue&&this.valueDeliveryTimeSelect.length&&this.valueStyleSelect.length&&(this.filterSearch(),this.filterDeliveryTimeSelect(),this.filterStyle()),this.inputValue&&this.valueDeliveryTimeSelect.length&&!this.valueStyleSelect.length&&(this.filterSearch(),this.filterDeliveryTimeSelect()),this.valueStyleSelect.length&&this.valueDeliveryTimeSelect.length&&!this.inputValue&&(this.filterDeliveryTimeSelect(),this.filterStyle()),this.valueStyleSelect.length&&this.inputValue&&!this.valueDeliveryTimeSelect.length&&(this.filterSearch(),this.filterStyle()),!this.inputValue||this.valueDeliveryTimeSelect.length||this.valueStyleSelect.length||this.filterSearch(),this.inputValue||this.valueDeliveryTimeSelect.length||!this.valueStyleSelect.length||this.filterStyle(),this.inputValue||!this.valueDeliveryTimeSelect.length||this.valueStyleSelect.length||this.filterDeliveryTimeSelect(),this.inputValue||this.valueDeliveryTimeSelect.length||this.valueStyleSelect.length||(this.searchCollection=this.products)},convertToDays:function(e){return e.toLowerCase().includes("week")?7*parseInt(e.split(" ")[0]):e.toLowerCase().includes("more")?40:e.toLowerCase().includes("month")?30*parseInt(e.split(" ")[0]):void 0}}},C=b,D=(i("b30f"),Object(m["a"])(C,a,s,!1,null,"0a9163d6",null)),T=D.exports,w={name:"App",components:{Finder:T}},_=w,x=(i("034f"),Object(m["a"])(_,l,r,!1,null,null,null)),k=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,i){},b30f:function(e,t,i){"use strict";var n=i("3432"),l=i.n(n);l.a},c432:function(e,t,i){}});
//# sourceMappingURL=app.76abddcf.js.map